import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, getClientIp } from '@/lib/rateLimit'

interface ContactFormData {
  name: string
  email: string
  company: string
  mrr: string
  message: string
  captchaToken: string
  honeypot?: string // Honeypot field to catch bots
}

/**
 * Verify Cloudflare Turnstile captcha token
 */
async function verifyCaptcha(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY

  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not configured')
    return false
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
          remoteip: ip,
        }),
      }
    )

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('Captcha verification error:', error)
    return false
  }
}

/**
 * Validate form data
 */
function validateFormData(data: ContactFormData): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  // Name validation
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.length > 100) {
    errors.name = 'Name is too long'
  }

  // Email validation
  if (!data.email || typeof data.email !== 'string' || !data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format'
  } else if (data.email.length > 255) {
    errors.email = 'Email is too long'
  }

  // Company validation
  if (!data.company || typeof data.company !== 'string' || !data.company.trim()) {
    errors.company = 'Company name is required'
  } else if (data.company.length > 100) {
    errors.company = 'Company name is too long'
  }

  // MRR validation
  const validMrrRanges = ['0-10k', '10-25k', '25-50k', '50k+']
  if (!data.mrr || !validMrrRanges.includes(data.mrr)) {
    errors.mrr = 'Please select a valid MRR range'
  }

  // Message validation (optional field)
  if (data.message && typeof data.message === 'string' && data.message.length > 1000) {
    errors.message = 'Message is too long'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * POST /api/contact
 * Handle contact form submission with security checks
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request)

    // Check rate limit (3 requests per 15 minutes per IP)
    const rateLimitResult = checkRateLimit(clientIp, {
      maxRequests: 3,
      windowMs: 15 * 60 * 1000, // 15 minutes
    })

    if (rateLimitResult.isLimited) {
      const resetDate = new Date(rateLimitResult.resetTime)
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          resetTime: resetDate.toISOString(),
        },
        { status: 429 }
      )
    }

    // Parse request body
    const body: ContactFormData = await request.json()

    // 1. Honeypot check - if filled, it's likely a bot
    if (body.honeypot && body.honeypot.trim() !== '') {
      console.log('Honeypot triggered - potential bot detected')
      // Return success to not alert the bot
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // 2. Validate form data
    const validation = validateFormData(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      )
    }

    // 3. Verify captcha token
    if (!body.captchaToken) {
      return NextResponse.json(
        { error: 'Captcha token is required' },
        { status: 400 }
      )
    }

    const captchaValid = await verifyCaptcha(body.captchaToken, clientIp)
    if (!captchaValid) {
      return NextResponse.json(
        { error: 'Captcha verification failed. Please try again.' },
        { status: 400 }
      )
    }

    // 4. All security checks passed - forward to webhook
    const webhookUrl = process.env.WEBHOOK_URL

    if (!webhookUrl) {
      console.error('WEBHOOK_URL is not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Prepare webhook payload (exclude security fields)
    const webhookPayload = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company.trim(),
      mrr: body.mrr,
      message: body.message?.trim() || '',
      timestamp: new Date().toISOString(),
      source: 'BizAutomates Landing Page',
      ipAddress: clientIp, // Optional: include IP for your records
    }

    // Send to webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    })

    if (!webhookResponse.ok) {
      console.error('Webhook submission failed:', webhookResponse.status)
      return NextResponse.json(
        { error: 'Failed to process submission. Please try again.' },
        { status: 500 }
      )
    }

    // Success
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        remaining: rateLimitResult.remaining,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/contact
 * Return method not allowed for GET requests
 */
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

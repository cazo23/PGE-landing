# Captcha & Anti-Spam Protection Setup Guide

Your contact form now includes comprehensive security protection against bots and spammers. This guide will help you configure everything.

## What Was Implemented

Your form now has **5 layers of protection**:

1. **Cloudflare Turnstile Captcha** - Invisible, privacy-friendly bot detection
2. **Server-side API Route** - All submissions go through validation
3. **Rate Limiting** - Max 3 submissions per 15 minutes per IP address
4. **Honeypot Field** - Hidden field that catches simple bots
5. **Server-side Validation** - Validates all data before forwarding to webhook

## Setup Instructions

### Step 1: Get Cloudflare Turnstile Keys (Free)

1. Go to https://dash.cloudflare.com/
2. Sign up or log in (it's free!)
3. Navigate to **Turnstile** in the left sidebar
4. Click **Add Site**
5. Configure your site:
   - **Site name**: BizAutomates Landing
   - **Domain**: Your domain (or `localhost` for testing)
   - **Widget Mode**: Managed (Recommended)
6. Click **Create**
7. You'll receive two keys:
   - **Site Key** (public - used in browser)
   - **Secret Key** (private - used on server)

### Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your keys:
   ```bash
   # Cloudflare Turnstile Configuration
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-actual-site-key-here
   TURNSTILE_SECRET_KEY=your-actual-secret-key-here

   # Webhook Configuration (server-side only)
   WEBHOOK_URL=https://hook.us1.make.com/your-webhook-id
   ```

3. **Important**: Remove the old `NEXT_PUBLIC_WEBHOOK_URL` if you had it configured, as it's now replaced with server-side `WEBHOOK_URL` for security.

### Step 3: Deploy to Production

When deploying to Vercel, Netlify, or any other platform:

1. Add the environment variables in your hosting dashboard:
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`
   - `WEBHOOK_URL`

2. Redeploy your site

## Testing Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. You should see the Cloudflare Turnstile widget appear
4. Fill out the form and submit
5. Check your console for any errors

## How It Works

### Old Flow (Vulnerable)
```
Browser → Webhook (Direct)
❌ No protection
❌ Webhook URL exposed
❌ Easy to spam
```

### New Flow (Secure)
```
Browser → API Route → Captcha Verify → Rate Limit Check → Validation → Webhook
✅ Bot protection
✅ Rate limiting
✅ Server-side validation
✅ Webhook URL hidden
```

## Security Features Explained

### 1. Cloudflare Turnstile
- **What it does**: Invisible challenge that detects bots using machine learning
- **User experience**: Most users won't see anything (automatic pass)
- **Why it's better than reCAPTCHA**: No Google tracking, privacy-friendly, better UX

### 2. Rate Limiting
- **What it does**: Allows max 3 submissions per IP address every 15 minutes
- **Implementation**: In-memory store (resets on server restart)
- **Customizable**: Edit `lib/rateLimit.ts` to adjust limits

### 3. Honeypot Field
- **What it does**: Hidden field that bots automatically fill but humans don't see
- **Implementation**: CSS `hidden` class + aria-hidden
- **Response**: Silently accepts submission but doesn't process it (doesn't alert the bot)

### 4. Server-side Validation
- **What it does**: Re-validates all form data on the server
- **Why needed**: Client-side validation can be bypassed in browser DevTools
- **Checks**: Email format, required fields, data length limits

### 5. Webhook URL Protection
- **Old**: `NEXT_PUBLIC_WEBHOOK_URL` was visible in browser source code
- **New**: `WEBHOOK_URL` is server-side only, never sent to browser
- **Benefit**: Bots can't see or abuse your webhook URL

## Customization

### Adjust Rate Limits

Edit `app/api/contact/route.ts` line 90:

```typescript
const rateLimitResult = checkRateLimit(clientIp, {
  maxRequests: 3,        // Change this number
  windowMs: 15 * 60 * 1000, // Change time window (milliseconds)
})
```

Examples:
- `maxRequests: 5, windowMs: 10 * 60 * 1000` - 5 requests per 10 minutes
- `maxRequests: 1, windowMs: 60 * 60 * 1000` - 1 request per hour

### Change Captcha Theme

Edit `app/components/ContactForm.tsx` line 321:

```typescript
options={{
  theme: 'light', // or 'dark'
  size: 'compact', // or 'normal'
}}
```

### Add Additional Validation

Edit the `validateFormData` function in `app/api/contact/route.ts` to add custom validation rules.

## Monitoring & Analytics

### View Blocked Requests

Check your server logs for:
- `Honeypot triggered - potential bot detected` - Bot caught by honeypot
- `Captcha verification failed` - Failed captcha challenge
- Rate limit responses return HTTP 429 status

### Cloudflare Dashboard

Visit your Turnstile dashboard to see:
- Total challenges served
- Pass/fail rates
- Bot detection statistics

## Troubleshooting

### Captcha Not Showing

1. Check if `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set in `.env.local`
2. Verify your domain is added to Turnstile site settings
3. Check browser console for errors

### Form Submissions Failing

1. Check if `TURNSTILE_SECRET_KEY` is set (server-side)
2. Verify `WEBHOOK_URL` is configured correctly
3. Check server logs for error messages

### Rate Limiting Too Strict

- Rate limits reset on server restart (in-memory store)
- For production, consider using Redis for persistent rate limiting
- Adjust limits in `app/api/contact/route.ts`

### "Too Many Requests" Error

- User has exceeded rate limit (3 requests per 15 minutes)
- They need to wait for the time window to expire
- Consider increasing limits if legitimate users are being blocked

## Production Recommendations

### For High-Traffic Sites

1. **Use Redis for Rate Limiting**
   - Current implementation uses in-memory storage
   - For multi-server deployments, use Redis or similar

2. **Enable Logging**
   - Add structured logging (e.g., Winston, Pino)
   - Track submission attempts and blocks

3. **Add Monitoring**
   - Set up alerts for high failure rates
   - Monitor webhook delivery success

4. **Consider IP Allowlisting**
   - Allow known good IPs to bypass rate limits
   - Useful for testing and trusted users

## Additional Resources

- [Cloudflare Turnstile Docs](https://developers.cloudflare.com/turnstile/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [OWASP Form Security](https://cheatsheetseries.owasp.org/cheatsheets/Form_Submission_Protection_Cheat_Sheet.html)

## Support

If you encounter issues:
1. Check the browser console for client-side errors
2. Check server logs for API errors
3. Verify all environment variables are set correctly
4. Test with captcha in different browsers

---

**Security Note**: Never commit `.env.local` to git. It's already in `.gitignore`.

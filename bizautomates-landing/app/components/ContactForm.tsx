'use client'

import { useState, FormEvent, useRef } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

interface FormData {
  name: string
  email: string
  company: string
  mrr: string
  message: string
  honeypot: string // Hidden field to catch bots
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  mrr?: string
  captcha?: string
  general?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    mrr: '',
    message: '',
    honeypot: '', // Hidden honeypot field
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string>('')
  const turnstileRef = useRef<any>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    if (!formData.mrr) {
      newErrors.mrr = 'Please select your MRR range'
    }

    if (!captchaToken) {
      newErrors.captcha = 'Please complete the security check'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({}) // Clear any previous errors

    try {
      // Submit to our secure API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 429) {
          setErrors({
            general: 'Too many requests. Please try again in 15 minutes.',
          })
        } else if (response.status === 400 && data.errors) {
          // Server-side validation errors
          setErrors(data.errors)
        } else {
          setErrors({
            general: data.error || 'There was an error submitting the form. Please try again.',
          })
        }
        // Reset captcha on error
        turnstileRef.current?.reset()
        setCaptchaToken('')
        return
      }

      // Success!
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        mrr: '',
        message: '',
        honeypot: '',
      })
      setCaptchaToken('')
    } catch (error) {
      console.error('Submission error:', error)
      setErrors({
        general: 'Network error. Please check your connection and try again.',
      })
      // Reset captcha on error
      turnstileRef.current?.reset()
      setCaptchaToken('')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="section-container" id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary-500/10 to-transparent rounded-2xl border-2 border-primary-500/30 p-12 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Thank You!</span>
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              We've received your Predictive Growth Audit request.
            </p>
            <p className="text-gray-500 mb-8">
              Our team will review your information and reach out within 24 hours to schedule your
              audit. Check your inbox (and spam folder) for our email.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-container bg-gradient-to-b from-dark-800/50 to-transparent" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6">
            <span className="text-primary-500 font-semibold">GET STARTED</span>
          </div>
          <h2 className="section-title">
            Book Your Free <span className="gradient-text">Growth Audit</span>
          </h2>
          <p className="section-subtitle">
            Let's explore how the Predictive Growth Engine can scale your SaaS revenue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-dark-800 border border-gray-800 rounded-2xl p-8">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`input-field ${errors.company ? 'border-red-500' : ''}`}
                placeholder="Your SaaS Company"
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>

            {/* MRR Range */}
            <div>
              <label htmlFor="mrr" className="block text-sm font-semibold mb-2">
                Current MRR Range *
              </label>
              <select
                id="mrr"
                name="mrr"
                value={formData.mrr}
                onChange={handleChange}
                className={`input-field ${errors.mrr ? 'border-red-500' : ''}`}
              >
                <option value="">Select your MRR range</option>
                <option value="0-10k">$0 - $10k</option>
                <option value="10-25k">$10k - $25k</option>
                <option value="25-50k">$25k - $50k</option>
                <option value="50k+">$50k+</option>
              </select>
              {errors.mrr && <p className="text-red-500 text-sm mt-1">{errors.mrr}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Tell us about your goals (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="input-field resize-none"
                placeholder="What are your biggest sales challenges? What revenue goals are you targeting?"
              />
            </div>

            {/* Honeypot field - hidden from real users, bots will fill it */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Cloudflare Turnstile Captcha */}
            <div className="flex flex-col items-center">
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                onSuccess={(token) => {
                  setCaptchaToken(token)
                  setErrors((prev) => ({ ...prev, captcha: undefined }))
                }}
                onError={() => {
                  setCaptchaToken('')
                  setErrors((prev) => ({
                    ...prev,
                    captcha: 'Security check failed. Please try again.',
                  }))
                }}
                onExpire={() => {
                  setCaptchaToken('')
                  setErrors((prev) => ({
                    ...prev,
                    captcha: 'Security check expired. Please verify again.',
                  }))
                }}
                options={{
                  theme: 'dark',
                  size: 'normal',
                }}
              />
              {errors.captcha && (
                <p className="text-red-500 text-sm mt-2">{errors.captcha}</p>
              )}
            </div>

            {/* General error message */}
            {errors.general && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-500 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Book My Free Growth Audit'
              )}
            </button>

            <p className="text-center text-sm text-gray-500">
              We typically respond within 24 hours. Your information is kept confidential.
            </p>
          </div>
        </form>

        {/* Additional info */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl mb-2">📞</div>
            <div className="text-sm font-semibold mb-1">15-Min Call</div>
            <div className="text-xs text-gray-500">Quick qualification chat</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm font-semibold mb-1">Growth Analysis</div>
            <div className="text-xs text-gray-500">Review your current sales</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-sm font-semibold mb-1">Custom Strategy</div>
            <div className="text-xs text-gray-500">Tailored automation plan</div>
          </div>
        </div>
      </div>
    </section>
  )
}

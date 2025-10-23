# Deployment Guide

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push code to Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BizAutomates landing page"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live in 2-3 minutes** at:
   - `https://your-project-name.vercel.app`

4. **Add custom domain** (optional):
   - Go to Project Settings > Domains
   - Add `bizautomates.com` or your domain
   - Update DNS records as instructed by Vercel

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project
cd bizautomates-landing

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

## Environment Setup (If using integrations)

If you integrate services, set environment variables in Vercel dashboard:

### Vercel Dashboard > Project > Settings > Environment Variables

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Calendly (optional)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link

# Email service API (if using contact form API)
EMAIL_API_KEY=your_api_key_here
EMAIL_API_URL=https://api.emailservice.com

# Form submission webhook
FORM_WEBHOOK_URL=https://hooks.zapier.com/your-webhook
```

## Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel dashboard
2. Navigate to Settings > Domains
3. Add your domain (e.g., `bizautomates.com` and `www.bizautomates.com`)

### Step 2: Update DNS Records

Add these records to your domain registrar (Namecheap, GoDaddy, etc.):

**For root domain (bizautomates.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Or use CNAME for root (if supported):**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

DNS propagation takes 5-60 minutes.

## Post-Deployment Checklist

### 1. Verify Site Functionality
- [ ] All sections load correctly
- [ ] Forms submit properly
- [ ] Smooth scrolling works
- [ ] Mobile responsive design
- [ ] All CTAs point to correct locations

### 2. SEO Setup
- [ ] Update metadata in `app/layout.tsx` with production URL
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics tracking (if added)
- [ ] Test social media sharing previews

### 3. Performance Optimization
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Aim for 90+ score
- [ ] Check Core Web Vitals in Vercel Analytics

### 4. Marketing Integration

**Calendly Integration:**
1. Update CTA buttons to open Calendly popup
2. See README.md for code examples

**Contact Form Integration:**
Options:
- **Zapier**: Set up webhook to capture form submissions
- **Make.com**: Create automation for form data
- **Custom API**: Build API route in `app/api/contact/route.ts`
- **Email service**: Use services like SendGrid, Mailgun

**Email Marketing:**
- Connect newsletter signup to Mailchimp, ConvertKit, or similar
- Update Footer.tsx with actual subscription logic

## Monitoring & Analytics

### Vercel Analytics (Built-in)
Vercel provides free analytics:
- Real User Monitoring
- Core Web Vitals tracking
- Geographic insights

Enable in: Project Settings > Analytics

### Google Analytics Setup

1. Get GA4 tracking ID from [analytics.google.com](https://analytics.google.com)

2. Install package:
```bash
npm install @next/third-parties
```

3. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Conversion Tracking

Track button clicks and form submissions:

```tsx
// Example: Track CTA clicks
<button
  onClick={() => {
    // Google Analytics event
    gtag('event', 'cta_click', {
      'event_category': 'engagement',
      'event_label': 'Book Growth Audit'
    })

    // Your CTA action
    scrollToContact()
  }}
>
  Book Your Growth Audit
</button>
```

## Troubleshooting

### Build Fails on Vercel
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Try clean build locally: `rm -rf .next && npm run build`

### Images Not Loading
- Store images in `public/` folder
- Use Next.js Image component
- Check image paths are absolute from public root

### Forms Not Submitting
- Add API route or connect to form service
- Check browser console for errors
- Verify CORS settings if using external API

### Slow Performance
- Optimize images (use webp/avif)
- Minimize JavaScript bundle size
- Enable Vercel Edge caching
- Use dynamic imports for heavy components

## Security Best Practices

1. **Environment Variables**: Never commit sensitive keys to Git
2. **API Routes**: Add rate limiting if creating API endpoints
3. **Form Validation**: Always validate on server-side
4. **HTTPS**: Vercel provides SSL automatically
5. **Headers**: Security headers configured in `vercel.json`

## Scaling Considerations

### As Traffic Grows:

1. **Enable Vercel Pro** ($20/mo):
   - Better performance
   - Priority support
   - More build minutes

2. **Add CDN for Assets**:
   - Use Vercel's built-in CDN
   - Or integrate Cloudflare for additional DDoS protection

3. **Database for Leads**:
   - Consider Supabase, PlanetScale, or Vercel Postgres
   - Store form submissions
   - Track lead sources

4. **A/B Testing**:
   - Vercel Edge Functions for split testing
   - Test different headlines, CTAs, pricing

## Maintenance

### Regular Updates:
```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Rebuild and redeploy
npm run build
vercel --prod
```

### Content Updates:
- Edit component files in `app/components/`
- Git commit and push to auto-deploy via Vercel

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Issues**: Check Vercel build logs

---

**Ready to deploy?** Start with Option 1 above and you'll be live in 5 minutes!

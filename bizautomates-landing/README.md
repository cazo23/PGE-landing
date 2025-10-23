# BizAutomates - Predictive Growth Engine™ Landing Page

A production-ready Next.js 14 landing page for BizAutomates' Predictive Growth Engine™, optimized for conversion and deployed on Vercel.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd bizautomates-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## 📁 Project Structure

```
bizautomates-landing/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with CTA
│   │   ├── Problem.tsx           # Pain points section
│   │   ├── Solution.tsx          # Solution overview
│   │   ├── System.tsx            # 5-step system breakdown
│   │   ├── Results.tsx           # Testimonials and results
│   │   ├── TargetAudience.tsx    # Ideal customer section
│   │   ├── Beta.tsx              # Beta program CTA
│   │   ├── Differentiator.tsx    # Competitive advantages
│   │   ├── ContactForm.tsx       # Lead capture form
│   │   ├── FinalCTA.tsx          # Final conversion section
│   │   └── Footer.tsx            # Footer with links
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles and Tailwind
├── public/
│   └── robots.txt                # SEO robots file
├── tailwind.config.js            # Tailwind with brand colors
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🎨 Brand Colors

The landing page uses BizAutomates' exact brand color palette:

- **Primary (Lime Green)**: `#D3FFCA` - CTAs, links, accents
- **Primary Hover**: `#B4BFAF` - Hover states
- **Dark Background**: `#080807` - Main background
- **Dark 800**: `#0F0F0F` - Secondary background
- **Dark 700**: `#22261E` - Gradient backgrounds
- **Gray 800**: `#232323` - Borders and cards
- **Gray 500**: `#858585` - Secondary text
- **White**: `#FFFFFF` - Primary text

## 🛠️ Customization

### Updating Content

All components are located in `app/components/`. Edit the respective component files to update content:

- **Hero Section**: Edit `Hero.tsx` for main headline and hero content
- **Testimonials**: Update testimonials array in `Results.tsx`
- **Pricing**: Modify pricing details in `Beta.tsx`
- **Contact Form**: Customize form fields in `ContactForm.tsx`

### Integrating Calendly

To add Calendly integration to the CTAs:

1. Install Calendly React component (optional):
```bash
npm install react-calendly
```

2. Update CTA buttons in `Hero.tsx`, `Beta.tsx`, and `FinalCTA.tsx` to open Calendly:

```tsx
import { PopupButton } from 'react-calendly'

// Replace button with:
<PopupButton
  url="https://calendly.com/your-link"
  rootElement={document.getElementById('__next')!}
  text="Book Your Growth Audit"
  className="btn-primary"
/>
```

### Form Submission

The contact form in `ContactForm.tsx` currently logs to console. To integrate with your backend:

1. Replace the simulation in `handleSubmit`:

```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  if (!validateForm()) return

  setIsSubmitting(true)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setIsSubmitted(true)
      // Reset form
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

2. Create API route at `app/api/contact/route.ts`

### Adding Google Analytics

1. Install GA package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:

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

### Logo Replacement

Replace the text logo in `Hero.tsx`:

```tsx
// Current placeholder:
<h2 className="text-2xl md:text-3xl font-bold gradient-text">
  BizAutomates
</h2>

// Replace with:
<Image
  src="/logo.svg"
  alt="BizAutomates"
  width={200}
  height={50}
  priority
/>
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket

2. Import your repository on [Vercel](https://vercel.com):
   - Go to https://vercel.com/new
   - Import your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. Your site will be live at `your-project.vercel.app`

4. Set up custom domain in Vercel dashboard

### Environment Variables

If you add API integrations, set environment variables in Vercel:

- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `EMAIL_API_KEY` - For email service integration
- Add others as needed

## ⚡ Performance

The landing page is optimized for:

- **Core Web Vitals**: Designed to score 90+ on PageSpeed Insights
- **Image Optimization**: Uses Next.js Image component
- **Font Optimization**: Inter font with display swap
- **Code Splitting**: Automatic route-based splitting
- **Compression**: Gzip/Brotli enabled by default

### Performance Tips

1. Add images to `public/` folder and use Next.js Image component
2. Keep component file sizes reasonable
3. Use dynamic imports for heavy components if needed
4. Monitor Core Web Vitals in Vercel Analytics

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Sections

1. Create new component in `app/components/`
2. Import and add to `app/page.tsx`
3. Update navigation links if needed

Example:

```tsx
// app/components/NewSection.tsx
export default function NewSection() {
  return (
    <section className="section-container">
      {/* Your content */}
    </section>
  )
}

// app/page.tsx
import NewSection from './components/NewSection'

export default function Home() {
  return (
    <main>
      {/* ... other components ... */}
      <NewSection />
    </main>
  )
}
```

## 🎯 Conversion Optimization

The landing page includes multiple conversion elements:

- **Primary CTAs**: Hero, Beta, Contact Form, Final CTA
- **Social Proof**: Testimonials, metrics, case study
- **Urgency**: Limited beta spots messaging
- **Trust Signals**: Results data, customer stories
- **Clear Value Prop**: Predictive Growth Engine™ benefits

### A/B Testing Suggestions

Consider testing:
- Headline variations in Hero section
- CTA button copy
- Pricing presentation in Beta section
- Form field count in ContactForm
- Social proof placement

## 📊 SEO

The landing page includes:

- Complete metadata setup with OpenGraph tags
- Semantic HTML5 structure
- Structured data (JSON-LD) for SoftwareApplication
- Optimized meta descriptions and titles
- robots.txt configuration
- Image alt tags (add when images are added)

### Adding Sitemap

Create `app/sitemap.ts`:

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bizautomates.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### TypeScript Errors

Ensure all dependencies are installed:
```bash
npm install --save-dev @types/node @types/react @types/react-dom
```

### Styling Issues

If Tailwind styles aren't applying:

1. Check `tailwind.config.js` content paths
2. Verify `globals.css` imports Tailwind directives
3. Clear browser cache and rebuild

## 📝 License

Proprietary - BizAutomates Inc.

## 🤝 Support

For questions or issues:
- Email: support@bizautomates.com
- Documentation: [BizAutomates Docs](https://docs.bizautomates.com)

---

Built with ❤️ using Next.js 14, React, TypeScript, and Tailwind CSS

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const interTight = Inter({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bizautomates.com'),
  title: {
    default: 'BizAutomates - Predictive Growth Engine | AI Sales Automation for SaaS',
    template: '%s | BizAutomates',
  },
  description:
    'Replace manual sales with AI automation. The Predictive Growth Engine helps SaaS founders with $10-50k MRR scale revenue through intelligent lead generation and automated outreach. Limited beta spots available.',
  keywords: [
    'AI sales automation',
    'SaaS growth',
    'predictive analytics',
    'lead generation',
    'sales automation',
    'B2B automation',
    'revenue growth',
    'SaaS founders',
    'business automation',
    'AI outreach',
  ],
  authors: [{ name: 'BizAutomates' }],
  creator: 'BizAutomates',
  publisher: 'BizAutomates',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bizautomates.com',
    title: 'BizAutomates - Predictive Growth Engine',
    description:
      'Replace manual sales with AI automation. Scale your SaaS revenue with intelligent lead generation and automated outreach.',
    siteName: 'BizAutomates',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BizAutomates - Predictive Growth Engine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BizAutomates - Predictive Growth Engine',
    description:
      'Replace manual sales with AI automation. Scale your SaaS revenue with intelligent lead generation and automated outreach.',
    images: ['/og-image.png'],
    creator: '@bizautomates',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#080807" />
      </head>
      <body className={interTight.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'BizAutomates Predictive Growth Engine',
              applicationCategory: 'BusinessApplication',
              offers: {
                '@type': 'Offer',
                price: '3500',
                priceCurrency: 'USD',
              },
              description:
                'AI-powered sales automation platform for SaaS companies',
              operatingSystem: 'Web',
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}

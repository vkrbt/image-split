import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Splitter for Instagram | Split Images for Social Media | Free Online Tool',
  description: 'Free online tool to split images for Instagram, Facebook, Twitter and other social media. Create perfect grid layouts, split images horizontally or vertically. Supports all popular formats. No registration required.',
  keywords: 'instagram image splitter, social media image splitter, split image for instagram, instagram grid maker, image split tool, split image online, free image splitter, facebook image splitter, twitter image splitter, social media image divider, instagram grid layout, image grid maker, split photos for instagram, instagram photo splitter',
  openGraph: {
    title: 'Image Splitter for Instagram | Split Images for Social Media | Free Online Tool',
    description: 'Free online tool to split images for Instagram, Facebook, Twitter and other social media. Create perfect grid layouts, split images horizontally or vertically. Supports all popular formats.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Image Splitter for Instagram',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Image Splitter for Instagram - Split your images for social media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Splitter for Instagram | Split Images for Social Media | Free Online Tool',
    description: 'Free online tool to split images for Instagram, Facebook, Twitter and other social media. Create perfect grid layouts, split images horizontally or vertically. Supports all popular formats.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://image-split.com',
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
    google: 'CYTnSrpWezOSPT0WFImc2buzX_L6kQue74rIc56hwIc',
  },
  category: 'image editing',
  classification: 'image splitter, social media tools, instagram tools',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Image Splitter Team' }],
  creator: 'Image Splitter Team',
  publisher: 'Image Splitter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MHBTVPD8VT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MHBTVPD8VT');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <main className="relative flex min-h-screen flex-col">
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-green-950/20 dark:via-blue-950/20 dark:to-purple-950/20 from-green-400/10 via-blue-500/10 to-purple-600/10" />
          {children}
        </main>
      </body>
    </html>
  )
}
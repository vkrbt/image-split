import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Split Images Online - Free & Fast Image Splitter | Image-Split.com',
  description: 'Instantly split your images into multiple parts with our fast and free image splitter tool. Perfect for Instagram grids, web layouts, and more. Process images directly in your browser - no server storage.',
  keywords: 'image splitter, split image online, split image tool, instagram grid maker, image grid splitter, photo splitter, image divider, split photos for instagram, free image splitter, browser-based image splitter, secure image splitter',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Split Images Online - Free & Fast Image Splitter | Image-Split.com',
    description: 'Instantly split your images into multiple parts with our fast and free image splitter tool. Perfect for Instagram grids, web layouts, and more. Process images directly in your browser - no server storage.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Image-Split.com',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: 'Split Images Online - Free & Fast Image Splitter Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Split Images Online - Free & Fast Image Splitter | Image-Split.com',
    description: 'Instantly split your images into multiple parts with our fast and free image splitter tool. Perfect for Instagram grids, web layouts, and more.',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og.png`],
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
    yandex: 'a97a2b3de9271fc8',
  },
  category: 'image editing',
  classification: 'image splitter, social media tools, instagram tools, photo editing',
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
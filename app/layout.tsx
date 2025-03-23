import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Splitter - Split Images Online | Free Image Divider Tool',
  description: 'Free online tool to split images into multiple parts. Split images horizontally, vertically, or into a grid. Supports PNG, JPG, WebP formats. No registration required.',
  keywords: 'image splitter, image divider, split image online, image grid maker, image parts, image cropping tool, image split tool, free image splitter',
  openGraph: {
    title: 'Image Splitter - Split Images Online | Free Image Divider Tool',
    description: 'Free online tool to split images into multiple parts. Split images horizontally, vertically, or into a grid. Supports PNG, JPG, WebP formats.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Image Splitter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Splitter - Split Images Online | Free Image Divider Tool',
    description: 'Free online tool to split images into multiple parts. Split images horizontally, vertically, or into a grid. Supports PNG, JPG, WebP formats.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <main className="relative flex min-h-screen flex-col">
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-green-950/20 dark:via-blue-950/20 dark:to-purple-950/20 from-green-400/10 via-blue-500/10 to-purple-600/10" />
          {children}
        </main>
      </body>
    </html>
  )
}
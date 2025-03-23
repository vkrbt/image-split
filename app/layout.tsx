import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Splitter - Split Images Online | Free Image Divider Tool',
  description: 'Free online tool to split images into multiple parts. Upload your image, choose split options, and download the results instantly. Supports various image formats.',
  keywords: ['image splitter', 'image divider', 'split image online', 'image cropping tool', 'free image tool', 'image grid maker', 'photo splitter', 'image parts', 'image segmentation'],
  verification: {
    google: 'CYTnSrpWezOSPT0WFImc2buzX_L6kQue74rIc56hwIc',
  },
  metadataBase: new URL('https://image-split.com'),
  authors: [{ name: 'Image Splitter Team' }],
  creator: 'Image Splitter Team',
  publisher: 'Image Splitter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Image Splitter - Split Images Online | Free Image Divider Tool',
    description: 'Free online tool to split images into multiple parts. Upload your image, choose split options, and download the results instantly.',
    url: 'https://image-split.com',
    siteName: 'Image Splitter',
    images: [
      {
        url: 'https://image-split.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Image Splitter - Split Images Online',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Splitter - Split Images Online | Free Image Divider Tool',
    description: 'Free online tool to split images into multiple parts. Upload your image, choose split options, and download the results instantly.',
    images: ['https://image-split.com/og-image.jpg'],
    creator: '@imagesplitter',
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
  alternates: {
    canonical: 'https://image-split.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  category: 'technology',
  classification: 'web application',
  referrer: 'origin-when-cross-origin',
  applicationName: 'Image Splitter',
  generator: 'Next.js',
  colorScheme: 'light dark',
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
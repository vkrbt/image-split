"use client"

import React, { useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Script from 'next/script'

const ImageDropzone = dynamic(() => import("../components/ImageDropzone"), {
  ssr: false,
})

const ImageSplitter = dynamic(() => import("../components/ImageSplitter"), {
  ssr: false,
})

export default function Home() {
  const [image, setImage] = useState<string | null>(null)

  const handleImageUpload = (dataUrl: string) => {
    setImage(dataUrl)
  }

  const handleReset = () => {
    setImage(null)
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Image Splitter",
            "description": "Free online tool to split images into multiple parts. Split images horizontally, vertically, or into a grid.",
            "applicationCategory": "Image Processing Tool",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Split images horizontally",
              "Split images vertically",
              "Split images into grid",
              "Support for PNG, JPG, WebP formats",
              "No registration required"
            ]
          })
        }}
      />
      <main className="container mx-auto px-4 py-6 md:py-12 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <header className="text-center mb-8">
            <motion.h1 
              className="text-2xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Image Splitter
            </motion.h1>
            <motion.p 
              className="text-[rgb(var(--foreground-dimmed))]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Upload an image and split it into multiple parts
            </motion.p>
          </header>

          <section className="mb-8">
            <h2 className="sr-only">Image Upload and Processing</h2>
            {!image ? (
              <ImageDropzone onImageUpload={handleImageUpload} />
            ) : (
              <ImageSplitter image={image} onReset={handleReset} />
            )}
          </section>

          <section className="mt-12 text-center text-sm text-[rgb(var(--foreground-dimmed))]">
            <h2 className="sr-only">Features and Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <h3 className="font-medium mb-2">Multiple Split Options</h3>
                <p>Split images horizontally, vertically, or into a custom grid</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Supported Formats</h3>
                <p>Works with PNG, JPG, and WebP image formats</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Free to Use</h3>
                <p>No registration required, use as many times as you need</p>
              </div>
            </div>
            <footer>
              <p>© {new Date().getFullYear()} Image Splitter. All rights reserved.</p>
            </footer>
          </section>
        </motion.div>
      </main>
    </>
  )
} 
"use client"

import React, { useState, Suspense } from "react"
import dynamic from "next/dynamic"
import { AnimatePresence } from "framer-motion"
import { Github } from "lucide-react"

const ImageDropzone = dynamic(() => import("../components/ImageDropzone"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg w-full h-full" />
    </div>
  )
})

const ImageSplitter = dynamic(() => import("../components/ImageSplitter"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg w-full h-full" />
    </div>
  )
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
    <main className="container mx-auto px-4 py-6 md:py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Split Your Image Online
          </h1>
          <p className="text-[rgb(var(--foreground-dimmed))]">
            Fast, free, and secure image splitting tool. Process your images directly in your browser - no server storage required.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="sr-only">Free Image Splitter Tool</h2>
          <AnimatePresence mode="wait">
            {!image ? (
              <div key="dropzone">
                <ImageDropzone onImageUpload={handleImageUpload} />
              </div>
            ) : (
              <div key="splitter">
                <ImageSplitter image={image} onReset={handleReset} />
              </div>
            )}
          </AnimatePresence>
        </section>

        <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg w-full h-32" />}>
          <section className="mt-12 text-center text-sm text-[rgb(var(--foreground-dimmed))]">
            <h2 className="sr-only">Features and Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <h3 className="font-medium mb-2">Multiple Split Options</h3>
                <p>Split images horizontally, vertically, or into a custom grid</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">AI Image Support</h3>
                <p>Perfect for splitting Midjourney, DALL-E, and other AI-generated images</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Free to Use</h3>
                <p>No registration required, use as many times as you need</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-2">Privacy & Security</h3>
              <p className="max-w-2xl mx-auto">
                Your privacy is important to us. All image processing happens directly in your browser - we never store or transmit your images to our servers. Your data stays completely private and secure.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-2">How to Split Images Online</h3>
              <div className="max-w-2xl mx-auto text-left">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Upload your image by dragging and dropping or clicking the upload area</li>
                  <li>Choose your preferred split method (horizontal, vertical, or grid)</li>
                  <li>Adjust the number of parts you want to split the image into</li>
                  <li>Download your split images instantly</li>
                </ol>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a
                href="/instagram-guide"
                className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Instagram Grid Guide
              </a>
              <a
                href="/ai-guide"
                className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                AI Image Splitting Guide
              </a>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-2">Why Use Our Image Splitter?</h3>
              <div className="max-w-2xl mx-auto text-left">
                <ul className="list-disc pl-5 space-y-2">
                  <li>100% browser-based processing - no server storage</li>
                  <li>Fast and efficient image splitting</li>
                  <li>Support for all major image formats</li>
                  <li>Perfect for Instagram grids and social media layouts</li>
                  <li>No registration or software installation required</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
              <div className="max-w-2xl mx-auto text-left space-y-4">
                <div>
                  <h4 className="font-medium">How safe is it to upload images?</h4>
                  <p>All image processing happens directly in your browser. We never store or transmit your images to our servers, ensuring complete privacy and security.</p>
                </div>
                <div>
                  <h4 className="font-medium">What image formats are supported?</h4>
                  <p>We support all major image formats including PNG, JPG, and WebP. The tool automatically handles the conversion while maintaining image quality.</p>
                </div>
                <div>
                  <h4 className="font-medium">How does the tool work?</h4>
                  <p>Our tool uses advanced browser-based image processing to split your images. The entire process happens locally on your device, with no data being sent to external servers.</p>
                </div>
              </div>
            </div>

            <footer>
              <p>© {new Date().getFullYear()} Image Splitter. All rights reserved.</p>
            </footer>
          </section>
        </Suspense>
      </div>
    </main>
  )
} 
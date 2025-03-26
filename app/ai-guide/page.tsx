import React from 'react';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export const metadata = {
  title: 'How to Split AI-Generated Images | Complete Guide for Midjourney, DALL-E & More',
  description: 'Learn how to split AI-generated images from Midjourney, DALL-E, and other AI image generators. Step-by-step guide for creating perfect splits of your AI artwork.',
  keywords: 'ai image splitter, midjourney splitter, dalle splitter, ai art splitter, split ai images, ai image grid splitter, split midjourney images, split dalle images',
};

export default function AIGuide() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Split AI-Generated Images
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Split your Midjourney, DALL-E, and other AI-generated images into perfect parts. Fast, free, and secure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Try Now
            </Link>
            <a
              href="#guide"
              className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground text-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Read Guide
            </a>
          </div>
        </section>

        <div id="guide">
          <h2 className="text-3xl font-bold text-center mb-6">
            Complete Guide to Splitting AI Images
          </h2>
          
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
            A step-by-step guide to splitting images from AI image generators like Midjourney, DALL-E, and more
          </p>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Split AI-Generated Images?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              AI image generators often create multiple variations or grid layouts of images. Our tool helps you extract individual images from these outputs, making it perfect for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Extracting individual images from Midjourney 2x2 grids</li>
              <li>Splitting DALL-E multiple variation outputs</li>
              <li>Creating custom layouts from AI-generated artwork</li>
              <li>Preparing AI images for social media posts</li>
            </ul>
          </section>

          {/* Step-by-Step Guide */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Step-by-Step Guide</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Get your AI image',
                  description: 'Download or save your AI-generated image from Midjourney, DALL-E, or other AI image generators'
                },
                {
                  step: '2',
                  title: 'Upload to our tool',
                  description: 'Use our free image splitter tool to process your AI image'
                },
                {
                  step: '3',
                  title: 'Choose split method',
                  description: 'Select grid layout (2x2, 3x3) or custom split options'
                },
                {
                  step: '4',
                  title: 'Preview splits',
                  description: 'See how your AI image will be split into parts'
                },
                {
                  step: '5',
                  title: 'Download parts',
                  description: 'Get individual images or download all parts as ZIP'
                }
              ].map((item) => (
                <div key={item.step} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Common Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Midjourney Grids</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Perfect for splitting Midjourney's 2x2 grid outputs into individual high-quality images. Our tool preserves the original quality and resolution of your AI artwork.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">DALL-E Variations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Split DALL-E's multiple variation outputs into separate images. Ideal for comparing different AI-generated versions and selecting your favorites.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Custom AI Layouts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create custom layouts from your AI-generated artwork. Split images horizontally, vertically, or into custom grid patterns.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Social Media Posts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Prepare your AI-generated images for social media by splitting them into the perfect size for Instagram, Facebook, or Twitter posts.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQ />
        </div>
      </div>
    </main>
  );
} 
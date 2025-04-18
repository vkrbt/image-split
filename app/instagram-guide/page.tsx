import React from 'react';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import InstagramGridExample from '@/components/InstagramGridExample';

export const metadata = {
  title: 'How to Split Images for Instagram Grid | Complete Guide',
  description: 'Learn how to create perfect Instagram grid layouts with our image splitter tool. Step-by-step guide for creating beautiful Instagram grid posts.',
  keywords: 'instagram grid guide, how to split images for instagram, instagram grid tutorial, instagram grid layout guide',
};

export default function InstagramGuide() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Split Images for Instagram Grid
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Create beautiful Instagram grid layouts with our free image splitter. Perfect for creating stunning visual stories and grid posts.
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
            Complete Guide to Instagram Grid Layouts
          </h2>
          
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
            A step-by-step guide to creating perfect Instagram grid layouts with our image splitter tool
          </p>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Create Instagram Grid Layouts?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Instagram grid layouts are a powerful way to create visually appealing content that stands out. Our tool helps you create perfect splits for your Instagram feed, making it ideal for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Creating visual stories across multiple posts</li>
              <li>Designing custom grid patterns and layouts</li>
              <li>Maintaining consistent image sizes and quality</li>
              <li>Building an engaging Instagram feed</li>
            </ul>
          </section>

          {/* Step-by-Step Guide */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Step-by-Step Guide</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Choose your image',
                  description: 'Select a high-quality image that works well when split'
                },
                {
                  step: '2',
                  title: 'Upload to our tool',
                  description: 'Use our free image splitter tool'
                },
                {
                  step: '3',
                  title: 'Select grid size',
                  description: 'Choose between 2x2, 3x3, or custom layouts'
                },
                {
                  step: '4',
                  title: 'Download parts',
                  description: 'Get each part of your split image'
                },
                {
                  step: '5',
                  title: 'Post to Instagram',
                  description: 'Upload each part in the correct order'
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

          {/* Example Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Grid Layout Examples</h2>
            <InstagramGridExample />
          </section>

          {/* Use Cases Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Common Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Visual Stories</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create engaging visual stories that span multiple posts in your Instagram feed. Perfect for showcasing your work or telling a story.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maintain consistent branding across your Instagram feed with perfectly sized and aligned grid posts.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Custom Layouts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create unique grid patterns and layouts that make your Instagram feed stand out from the crowd.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Product Showcases</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Showcase your products or services with professional-looking grid layouts that capture attention.
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
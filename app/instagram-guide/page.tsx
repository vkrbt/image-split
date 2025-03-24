import React from 'react';
import FAQ from '@/components/FAQ';
import InstagramGridExample from '@/components/InstagramGridExample';

export const metadata = {
  title: 'How to Split Images for Instagram Grid | Complete Guide',
  description: 'Learn how to create perfect Instagram grid layouts with our image splitter tool. Step-by-step guide for creating beautiful Instagram grid posts.',
  keywords: 'instagram grid guide, how to split images for instagram, instagram grid tutorial, instagram grid layout guide',
};

export default function InstagramGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold text-center mb-6">Complete Guide: How to Split Images for Instagram Grid</h1>
          <p className="text-xl text-center max-w-2xl mx-auto opacity-90">
            Create stunning Instagram grid layouts with our free image splitter tool. Perfect for both beginners and professionals.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Start Creating Grids
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Why Use Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Use Instagram Grid Layout?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Instagram grid layout is a creative way to display your content by splitting a single image into multiple posts.
                This creates a visually appealing pattern on your profile and helps you stand out from other users.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-300">✓</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Create unique visual patterns on your profile</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-300">✓</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Tell stories across multiple posts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-300">✓</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Increase engagement with creative layouts</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                <InstagramGridExample />
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Step-by-Step Guide</h2>
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

        {/* Use Cases Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Popular Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Brand Storytelling',
                description: 'Create a cohesive brand story across your Instagram grid',
                icon: '🎯'
              },
              {
                title: 'Photo Series',
                description: 'Split panoramic photos or photo series into grid posts',
                icon: '📸'
              },
              {
                title: 'Product Showcase',
                description: 'Display product details across multiple grid posts',
                icon: '🛍️'
              },
              {
                title: 'Event Coverage',
                description: 'Share event highlights in a visually appealing grid',
                icon: '🎉'
              },
              {
                title: 'Tutorial Steps',
                description: 'Break down tutorials into step-by-step grid posts',
                icon: '📝'
              },
              {
                title: 'Portfolio Display',
                description: 'Showcase your work in an organized grid layout',
                icon: '🎨'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Best Practices & Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Best Practices</h3>
              <ul className="space-y-4">
                {[
                  'Use high-resolution images (1080x1080 pixels)',
                  'Plan your grid layout before splitting',
                  'Maintain consistent spacing between posts',
                  'Consider your profile\'s overall aesthetic'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-300">✓</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Pro Tips</h3>
              <ul className="space-y-4">
                {[
                  'Use images with similar color schemes',
                  'Create patterns or tell a story across your grid',
                  'Keep important elements centered in each split',
                  'Test your layout before posting'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 dark:text-blue-300">💡</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tool Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Why Choose Our Tool?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Lightning Fast',
                description: 'Split images in seconds with our optimized algorithm',
                icon: '⚡'
              },
              {
                title: 'High Quality',
                description: 'Maintain original image quality in every split',
                icon: '✨'
              },
              {
                title: 'Multiple Formats',
                description: 'Support for JPG, PNG, WebP, and more',
                icon: '🖼️'
              },
              {
                title: 'Custom Grids',
                description: 'Create custom grid layouts for any need',
                icon: '🎯'
              },
              {
                title: 'No Registration',
                description: 'Start using immediately without sign-up',
                icon: '🚀'
              },
              {
                title: 'Free Forever',
                description: 'All features available without payment',
                icon: '💎'
              },
              {
                title: 'Mobile Friendly',
                description: 'Works perfectly on all devices',
                icon: '📱'
              },
              {
                title: 'Privacy Focused',
                description: 'Your images never leave your device',
                icon: '🔒'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
} 
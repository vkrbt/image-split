import { FC } from 'react';

const JsonLd: FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Image Splitter for Instagram',
    description: 'Free online tool to split images for Instagram, Facebook, Twitter and other social media. Create perfect grid layouts, split images horizontally or vertically.',
    applicationCategory: 'Image Editing Tool',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    featureList: [
      'Split images for Instagram grid',
      'Create horizontal and vertical splits',
      'Support for multiple social media platforms',
      'No registration required',
      'Free to use'
    ],
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    softwareVersion: '1.0.0',
    url: 'https://image-split.com',
    screenshot: 'https://image-split.com/og-image.jpg',
    author: {
      '@type': 'Organization',
      name: 'Image Splitter Team'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd; 
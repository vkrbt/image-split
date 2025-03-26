import React from 'react'
import Script from 'next/script'

const JsonLd = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How safe is it to upload images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All image processing happens directly in your browser. We never store or transmit your images to our servers, ensuring complete privacy and security."
        }
      },
      {
        "@type": "Question",
        "name": "What image formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support all major image formats including PNG, JPG, and WebP. The tool automatically handles the conversion while maintaining image quality."
        }
      },
      {
        "@type": "Question",
        "name": "How does the tool work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tool uses advanced browser-based image processing to split your images. The entire process happens locally on your device, with no data being sent to external servers."
        }
      }
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Image-Split.com",
    "url": "https://image-split.com",
    "logo": "https://image-split.com/og-image.jpg",
    "description": "Free online tool for splitting images into multiple parts. Process images directly in your browser with no server storage required.",
    "sameAs": [
      "https://twitter.com/imagesplit",
      "https://facebook.com/imagesplit"
    ]
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}

export default JsonLd 
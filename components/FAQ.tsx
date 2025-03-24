import { FC } from 'react';

const FAQ: FC = () => {
  const faqs = [
    {
      question: 'How do I split an image for Instagram grid?',
      answer: 'Upload your image, select the grid layout option (2x2, 3x3, etc.), and our tool will automatically split your image into the perfect size for Instagram grid posts. You can then download each part separately.'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support all popular image formats including JPG, PNG, WebP, and GIF. The tool will maintain the original quality of your images while splitting them.'
    },
    {
      question: 'What are the recommended image sizes for Instagram?',
      answer: 'For Instagram grid posts, the recommended size is 1080x1080 pixels. Our tool automatically optimizes your images to meet Instagram\'s requirements while maintaining quality.'
    },
    {
      question: 'Can I split images for other social media platforms?',
      answer: 'Yes! Our tool is perfect for creating image splits for Facebook, Twitter, and other social media platforms. You can customize the split dimensions based on each platform\'s requirements.'
    },
    {
      question: 'Is this tool free to use?',
      answer: 'Yes, our image splitter is completely free to use. There\'s no registration required, and you can split as many images as you need without any limitations.'
    }
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 
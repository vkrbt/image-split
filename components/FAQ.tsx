import { FC } from 'react';

const FAQ: FC = () => {
  const faqs = [
    {
      question: 'How do I split Midjourney 2x2 grid images?',
      answer: 'Upload your Midjourney grid image, select the grid layout option (2x2), and our tool will automatically split it into four individual high-quality images. Each part will maintain the original resolution and quality.'
    },
    {
      question: 'Can I split DALL-E generated images?',
      answer: 'Yes! Our tool works perfectly with DALL-E images. You can split both single images and multiple variation outputs into individual parts while maintaining the original quality.'
    },
    {
      question: 'What image formats are supported for AI images?',
      answer: 'We support all popular image formats including JPG, PNG, WebP, and GIF. The tool will maintain the original quality of your AI-generated images while splitting them.'
    },
    {
      question: 'How do I preserve image quality when splitting AI images?',
      answer: 'Our tool processes images directly in your browser and maintains the original resolution and quality. We don\'t compress or degrade the quality of your AI-generated artwork.'
    },
    {
      question: 'Can I create custom layouts for my AI images?',
      answer: 'Yes! You can split your AI-generated images horizontally, vertically, or into custom grid patterns. This is perfect for creating unique layouts for your AI artwork.'
    },
    {
      question: 'Is this tool free to use?',
      answer: 'Yes, our image splitter is completely free to use. There\'s no registration required, and you can split as many AI images as you need without any limitations.'
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
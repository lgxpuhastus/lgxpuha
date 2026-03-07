'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Script from 'next/script';

export const faqs = [
  {
    question: 'Do I need to provide cleaning supplies?',
    answer: 'No. Our team brings all professional cleaning products and equipment.',
  },
  {
    question: 'How long does a cleaning service take?',
    answer: 'It depends on the size and condition of the property. Most regular cleanings take between 2 to 4 hours.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'No, many of our clients provide access to the property while they are away. We are trusted by homeowners across Tallinn.',
  },
  {
    question: 'How can I book a cleaning?',
    answer: 'You can contact us through WhatsApp, phone or our website contact form. We typically respond within a few hours.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide cleaning services in Tallinn and Harjumaa, including all districts of the city.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfer and cash payments.',
  },
  {
    question: 'What if I am not satisfied with the cleaning?',
    answer: 'Customer satisfaction is very important to us. If you are not satisfied with any part of the service, please contact us within 24 hours and we will return to correct the issue at no additional cost.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-sage-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-sage-50 transition-colors"
            >
              <span className="font-medium text-sage-900">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-sage-500 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="p-4 pt-0 text-sage-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

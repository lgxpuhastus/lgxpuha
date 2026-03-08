'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

const faqKeys = ['supplies', 'duration', 'presence', 'booking', 'areas', 'payment', 'satisfaction'] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faq.questions');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = faqKeys.map((key) => ({
    question: t(`${key}.question`),
    answer: t(`${key}.answer`),
  }));

  return (
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
  );
}

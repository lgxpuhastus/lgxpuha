'use client';

import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

const testimonialKeys = ['testimonial1', 'testimonial2', 'testimonial3'] as const;

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = testimonialKeys.map((key) => ({
    name: t(`${key}.name`),
    text: t(`${key}.text`),
    location: t(`${key}.location`),
    rating: 5,
  }));

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl border border-sage-200"
        >
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-sage-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
          <div>
            <p className="font-semibold text-sage-900">{testimonial.name}</p>
            <p className="text-sm text-sage-500">{testimonial.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

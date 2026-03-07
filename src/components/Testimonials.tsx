import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria K.',
    text: 'Ana and her team did an amazing job with our move-out cleaning. The apartment looked better than when we moved in. Highly recommend!',
    rating: 5,
    location: 'Kesklinn, Tallinn',
  },
  {
    name: 'Johan S.',
    text: 'We use LGX Puhastus for weekly cleaning and the consistency is excellent. Our home always feels fresh and welcoming.',
    rating: 5,
    location: 'Mustamae, Tallinn',
  },
  {
    name: 'Elena R.',
    text: 'Very professional and trustworthy. I feel comfortable leaving my keys with them. The attention to detail is impressive.',
    rating: 5,
    location: 'Pirita, Tallinn',
  },
];

export default function Testimonials() {
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

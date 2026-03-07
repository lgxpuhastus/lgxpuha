'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

const serviceTypes = [
  'Regular Cleaning',
  'Deep Cleaning',
  'Move In/Out Cleaning',
  'Office Cleaning',
  'Upholstery Cleaning',
  'Window Cleaning',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Send className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-sage-900 mb-2">Thank you!</h3>
        <p className="text-sage-600">We will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
          placeholder="+372 XXXX XXXX"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-sage-700 mb-2">
          Service Type
        </label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors"
        >
          <option value="">Select a service</option>
          {serviceTypes.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your cleaning needs..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

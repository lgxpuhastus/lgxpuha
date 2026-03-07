import { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import PricingTable from '@/components/PricingTable';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent, flat-rate pricing for all our cleaning services. No hidden fees. Regular cleaning from 70 EUR, deep cleaning from 120 EUR.',
};

const regularCleaning = [
  { name: 'Studio', price: 'from 70 EUR' },
  { name: '1 Bedroom', price: 'from 80 EUR' },
  { name: '2 Bedroom', price: 'from 90 EUR' },
  { name: '3 Bedroom', price: 'from 105 EUR' },
  { name: 'House', price: 'from 120 EUR' },
];

const deepCleaning = [
  { name: 'Studio', price: 'from 120 EUR' },
  { name: '1 Bedroom', price: 'from 150 EUR' },
  { name: '2 Bedroom', price: 'from 180 EUR' },
  { name: '3 Bedroom', price: 'from 220 EUR' },
  { name: 'House', price: 'from 260 EUR' },
];

const moveOutCleaning = [
  { name: 'Studio', price: 'from 150 EUR' },
  { name: '1 Bedroom', price: 'from 180 EUR' },
  { name: '2 Bedroom', price: 'from 220 EUR' },
  { name: '3 Bedroom', price: 'from 260 EUR' },
  { name: 'House', price: 'from 320 EUR' },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-sage-600">
              No hidden fees, no surprises. Our flat-rate pricing makes it easy to know exactly what you will pay.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <PricingTable
              title="Regular Cleaning"
              items={regularCleaning}
            />
            <PricingTable
              title="Deep Cleaning"
              items={deepCleaning}
              highlighted
            />
            <PricingTable
              title="Move In/Out Cleaning"
              items={moveOutCleaning}
            />
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-sage-50 rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-sage-900 mb-4">
                Good to know
              </h3>
              <ul className="space-y-3 text-sage-700">
                <li className="flex items-start gap-2">
                  <span className="text-sage-500 mt-1">•</span>
                  Discounted rates for regular clients (weekly/bi-weekly bookings)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-500 mt-1">•</span>
                  Final price may vary based on property size and condition
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-500 mt-1">•</span>
                  All prices include professional cleaning products and equipment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-500 mt-1">•</span>
                  We accept bank transfer and cash payments
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-sage-900 mb-4">
              Other Services
            </h3>
            <p className="text-sage-600 mb-6">
              For office cleaning, upholstery cleaning, and window cleaning, please contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-primary">
                Use Price Calculator
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get your exact quote today
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              Use our calculator for an instant estimate or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-secondary">
                Use Calculator
              </Link>
              <a
                href="https://wa.me/372XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-sage-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

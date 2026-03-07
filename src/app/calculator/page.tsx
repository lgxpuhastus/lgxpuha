import { Metadata } from 'next';
import Link from 'next/link';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: 'Price Calculator',
  description: 'Get an instant cleaning quote for your home in Tallinn. Select your property type and service to see estimated pricing.',
};

export default function CalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              Price Calculator
            </h1>
            <p className="text-lg text-sage-600">
              Get an instant estimate for your cleaning needs. Select your property type and service to see pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <Calculator />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-sage-900 mb-6 text-center">
              How Our Pricing Works
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-sage-900 mb-2">Flat-Rate Pricing</h3>
                <p className="text-sage-600 text-sm">
                  Our prices are based on property size and service type, not hourly rates. You know what you pay upfront.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-sage-900 mb-2">Discounts for Regular Clients</h3>
                <p className="text-sage-600 text-sm">
                  Book weekly or bi-weekly cleanings and enjoy discounted rates for your ongoing service.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-sage-900 mb-2">All-Inclusive Service</h3>
                <p className="text-sage-600 text-sm">
                  Our team brings all professional cleaning products and equipment. No additional costs.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-sage-900 mb-2">Custom Quotes Available</h3>
                <p className="text-sage-600 text-sm">
                  For special requests or unique properties, contact us for a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white border-t border-sage-100">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-sage-600 mb-4">
              Need more information about our services?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
              <Link href="/pricing" className="btn-secondary">
                See Full Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

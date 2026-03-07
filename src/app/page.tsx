import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Home, 
  Truck, 
  Building2, 
  Sofa, 
  Square,
  Phone,
  CheckCircle,
  Clock,
  Star,
  Users
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

const services = [
  {
    title: 'Regular Cleaning',
    description: 'Professional maintenance cleaning to keep your home consistently fresh and comfortable.',
    href: '/services/regular-cleaning',
    icon: Home,
  },
  {
    title: 'Deep Cleaning',
    description: 'Detailed cleaning for homes that need extra care or have not been professionally cleaned recently.',
    href: '/services/deep-cleaning',
    icon: Sparkles,
  },
  {
    title: 'Move In/Out Cleaning',
    description: 'Comprehensive cleaning designed for empty homes before moving in or after moving out.',
    href: '/services/move-out-cleaning',
    icon: Truck,
  },
  {
    title: 'Office Cleaning',
    description: 'Reliable cleaning services for offices and small commercial spaces.',
    href: '/services/office-cleaning',
    icon: Building2,
  },
  {
    title: 'Upholstery Cleaning',
    description: 'Professional deep cleaning for sofas, armchairs, and other upholstered furniture.',
    href: '/services/upholstery-cleaning',
    icon: Sofa,
  },
  {
    title: 'Window Cleaning',
    description: 'Professional window cleaning service for crystal clear views.',
    href: '/services/window-cleaning',
    icon: Square,
  },
];

const steps = [
  {
    step: '1',
    title: 'Get in Touch',
    description: 'Contact us via WhatsApp, phone, or our contact form.',
  },
  {
    step: '2',
    title: 'Receive a Quote',
    description: 'We will provide you with a clear, fair price for your cleaning needs.',
  },
  {
    step: '3',
    title: 'Schedule Your Cleaning',
    description: 'Choose a date and time that works best for you.',
  },
  {
    step: '4',
    title: 'Enjoy Your Clean Home',
    description: 'Relax while we take care of the cleaning for you.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sage-50 to-white section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-900 mb-6">
                Your home, in caring hands
              </h1>
              <p className="text-lg md:text-xl text-sage-600 mb-8">
                Professional cleaning services in Tallinn and Harjumaa. We treat your home with the same care as our own.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/calculator" className="btn-primary">
                  Get a Quote
                </Link>
                <a
                  href="https://wa.me/372XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.jpg"
                alt="Clean, bright living room in Tallinn"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-y border-sage-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-full mx-auto mb-3">
                <Clock className="h-6 w-6 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-sage-900">Since 2024</p>
              <p className="text-sage-600 text-sm">Serving Tallinn</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-full mx-auto mb-3">
                <Users className="h-6 w-6 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-sage-900">100+</p>
              <p className="text-sage-600 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-full mx-auto mb-3">
                <Star className="h-6 w-6 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-sage-900">5.0</p>
              <p className="text-sage-600 text-sm">Google Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-full mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-sage-900">100%</p>
              <p className="text-sage-600 text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              From regular maintenance to deep cleaning, we have a service for every need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Getting your home cleaned is simple and straightforward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-14 h-14 bg-sage-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-sage-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sage-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Trusted by homeowners across Tallinn.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sage-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to enjoy a cleaner home?
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              Moving out soon? We often accommodate last-minute requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-secondary">
                Get a Quote
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

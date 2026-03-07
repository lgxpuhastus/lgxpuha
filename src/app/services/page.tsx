import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  Home, 
  Truck, 
  Building2, 
  Sofa, 
  Square,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Cleaning Services',
  description: 'Professional cleaning services in Tallinn. Regular cleaning, deep cleaning, move in/out cleaning, office cleaning, upholstery cleaning, and window cleaning.',
};

const services = [
  {
    title: 'Regular Cleaning',
    description: 'Professional maintenance cleaning designed to keep your home consistently fresh, clean, and comfortable. Perfect for weekly or bi-weekly home maintenance.',
    includes: [
      'Dusting and cleaning all accessible surfaces',
      'Vacuuming and mopping all floors',
      'Bathroom cleaning (toilet, sink, shower area)',
      'Mirror cleaning',
      'General dust removal',
    ],
    href: '/services/regular-cleaning',
    icon: Home,
    price: 'from 70 EUR',
  },
  {
    title: 'Deep Cleaning',
    description: 'A detailed cleaning service recommended for homes that require extra care or have not been professionally cleaned recently.',
    includes: [
      'Everything in Regular Cleaning',
      'Cleaning inside cabinets and drawers',
      'Interior cleaning of kitchen appliances',
      'Detailed bathroom cleaning with limescale removal',
      'Thorough cleaning of all surfaces',
    ],
    href: '/services/deep-cleaning',
    icon: Sparkles,
    price: 'from 120 EUR',
  },
  {
    title: 'Move In/Out Cleaning',
    description: 'A comprehensive cleaning designed for empty homes before moving in or after moving out. Recommended for tenants, landlords, and property managers.',
    includes: [
      'Cleaning inside and outside of cabinets and drawers',
      'Interior appliance cleaning',
      'Full bathroom descaling and sanitizing',
      'Interior window cleaning',
      'Cleaning all surfaces and mirrors',
    ],
    href: '/services/move-out-cleaning',
    icon: Truck,
    price: 'from 150 EUR',
  },
  {
    title: 'Office Cleaning',
    description: 'Reliable cleaning services for offices and small commercial spaces. Keep your workspace professional and welcoming.',
    includes: [
      'Desk and surface cleaning',
      'Floor vacuuming and mopping',
      'Bathroom cleaning',
      'Mirror cleaning',
      'Trash removal',
      'General dusting',
    ],
    href: '/services/office-cleaning',
    icon: Building2,
    price: 'Contact us',
  },
  {
    title: 'Upholstery Cleaning',
    description: 'Professional deep cleaning for sofas, armchairs, and other upholstered furniture to remove dirt, stains and odors.',
    includes: [
      'Deep fabric cleaning',
      'Stain removal',
      'Odor elimination',
      'Fabric protection treatment',
    ],
    href: '/services/upholstery-cleaning',
    icon: Sofa,
    price: 'Contact us',
  },
  {
    title: 'Window Cleaning',
    description: 'Professional window cleaning service for crystal clear views. Interior and exterior window cleaning available.',
    includes: [
      'Interior window cleaning',
      'Frame and sill cleaning',
      'Streak-free finish',
    ],
    href: '/services/window-cleaning',
    icon: Square,
    price: 'Contact us',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              Our Cleaning Services
            </h1>
            <p className="text-lg text-sage-600">
              From regular maintenance to specialized cleaning, we have a service for every need. All services include professional equipment and eco-friendly products.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-lg">
                        <Icon className="h-6 w-6 text-sage-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-sage-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-sage-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sage-700">
                          <span className="text-sage-500 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold text-sage-900">
                        {service.price}
                      </span>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-sage-600 hover:text-sage-800 font-medium"
                      >
                        Learn more <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  <div className={`bg-sage-100 rounded-xl aspect-video ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Placeholder for service image */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              Contact us and we will help you choose the right cleaning service for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-secondary">
                Get a Quote
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sage-700 font-medium rounded-lg hover:bg-sage-50 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

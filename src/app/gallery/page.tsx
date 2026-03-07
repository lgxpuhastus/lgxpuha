import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'See before and after photos of our professional cleaning work in Tallinn homes and offices.',
};

const galleryItems = [
  {
    title: 'Kitchen Deep Clean',
    description: 'Sparkling clean and sanitized kitchen',
    image: '/images/kitchen-clean.jpg',
  },
  {
    title: 'Bathroom Transformation',
    description: 'Fresh, spotless, and limescale-free',
    image: '/images/bathroom-clean.jpg',
  },
  {
    title: 'Move-Out Ready',
    description: 'Empty apartment ready for handover',
    image: '/images/moveout-clean.jpg',
  },
  {
    title: 'Office Space',
    description: 'Professional workspace, professionally cleaned',
    image: '/images/office-clean.jpg',
  },
  {
    title: 'Upholstery Cleaning',
    description: 'Sofas restored to fresh condition',
    image: '/images/sofa-clean.jpg',
  },
  {
    title: 'Window Cleaning',
    description: 'Crystal clear views, streak-free glass',
    image: '/images/windows-clean.jpg',
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              Our Work
            </h1>
            <p className="text-lg text-sage-600">
              See the difference professional cleaning makes. Browse our cleaning results from homes across Tallinn.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="bg-sage-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sage-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-sage-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for your transformation?
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              Let us bring the same level of care and attention to your home.
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

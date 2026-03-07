import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Shield, Eye, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about LGX Puhastus, a professional cleaning company in Tallinn founded by Ana in 2024. Your home in caring hands.',
};

const values = [
  {
    icon: Shield,
    title: 'Trust',
    description: 'We understand that inviting someone into your home requires trust. We treat every home with respect and integrity.',
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'We clean your home as if it were our own. Every detail matters because your comfort matters to us.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'We believe great cleaning is in the details. Nothing is overlooked, nothing is rushed.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              About LGX Puhastus
            </h1>
            <p className="text-lg text-sage-600">
              Your home in caring hands. We are a professional cleaning company serving Tallinn and Harjumaa since 2024.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-sage-600">
                <p>
                  LGX Puhastus was founded by Ana, a Brazilian who moved to Tallinn with a passion for creating clean, welcoming spaces. After working in the cleaning industry and seeing a need for more personal, trustworthy service, she decided to start her own company in 2024.
                </p>
                <p>
                  Our philosophy is simple: we treat every home as if it were our own. We understand that when you give someone your keys, you are placing a lot of trust in them. We take that responsibility seriously.
                </p>
                <p>
                  Today, we serve families, professionals, and property managers across Tallinn and the surrounding Harjumaa region. Our clients come back to us because they know they can count on consistent, high-quality cleaning with a personal touch.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-sage-200">
                <Image
                  src="/images/ana-portrait.jpg"
                  alt="Ana, founder of LGX Puhastus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Everything we do is guided by these core principles.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mx-auto mb-6">
                    <Icon className="h-8 w-8 text-sage-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sage-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sage-900 mb-8">
              Company Information
            </h2>
            <div className="bg-sage-50 rounded-xl p-8">
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-sm text-sage-500 mb-1">Company Name</p>
                  <p className="font-semibold text-sage-900">LGX Puhastus OU</p>
                </div>
                <div>
                  <p className="text-sm text-sage-500 mb-1">Registration Number</p>
                  <p className="font-semibold text-sage-900">17031884</p>
                </div>
                <div>
                  <p className="text-sm text-sage-500 mb-1">Location</p>
                  <p className="font-semibold text-sage-900">Tallinn, Estonia</p>
                </div>
                <div>
                  <p className="text-sm text-sage-500 mb-1">Service Area</p>
                  <p className="font-semibold text-sage-900">Tallinn and Harjumaa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to experience the difference?
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              Let us show you what caring hands can do for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Contact Us
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

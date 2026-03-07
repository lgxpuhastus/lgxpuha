import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, ArrowLeft, ChevronDown } from 'lucide-react';
import { services } from '@/lib/services';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services[params.slug];
  if (!service) return { title: 'Service Not Found' };

  const title = `${service.title} in Tallinn | LGX Puhastus`;

  return {
    title,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, cleaning service tallinn, ${service.slug.replace(/-/g, ' ')}, professional cleaning estonia`,
    openGraph: {
      title,
      description: service.description,
      url: `https://ana.barqai.agency/services/${service.slug}`,
      siteName: 'LGX Puhastus',
      locale: 'en_EE',
      type: 'website',
    },
    alternates: {
      canonical: `https://ana.barqai.agency/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services[params.slug];

  if (!service) {
    notFound();
  }

  const faqSchema = service.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ana.barqai.agency',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://ana.barqai.agency/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://ana.barqai.agency/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </head>

      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <nav className="mb-6 text-sm text-sage-500">
            <Link href="/" className="hover:text-sage-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-sage-700">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-sage-700">{service.title}</span>
          </nav>
          <Link
            href="/services"
            className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-sage-600">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-sage-900 mb-6">
                What is Included
              </h2>
              <ul className="space-y-4">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sage-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sage-600 italic">
                {service.perfectFor}
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-sage-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-sage-900 mb-6">
                Pricing
              </h2>
              <div className="space-y-4 mb-8">
                {service.pricing.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-4 border-b border-sage-200 last:border-0"
                  >
                    <span className="text-sage-700">{item.type}</span>
                    <span className="font-semibold text-sage-900">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-sage-500 mb-6">
                Discounted rates available for regular clients (weekly/bi-weekly).
              </p>
              <div className="space-y-4">
                <Link href="/calculator" className="btn-primary w-full text-center">
                  Get a Quote
                </Link>
                <a
                  href="https://wa.me/372XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {service.additionalContent && (
        <section className="section-padding bg-sage-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-sage">
              <div 
                className="text-sage-700 space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: service.additionalContent
                    .replace(/## /g, '<h2 class="text-2xl font-bold text-sage-900 mt-8 mb-4">')
                    .replace(/### /g, '<h3 class="text-xl font-semibold text-sage-800 mt-6 mb-3">')
                    .replace(/\n- /g, '</p><li class="ml-4">')
                    .replace(/\n\n/g, '</p><p class="text-sage-700 leading-relaxed">')
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-sage-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faq.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-sage-50 rounded-lg"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-medium text-sage-900 pr-4">
                        {item.question}
                      </h3>
                      <ChevronDown className="h-5 w-5 text-sage-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-sage-600">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-sage-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to book your cleaning?
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              Moving out soon? We often accommodate last-minute requests.
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

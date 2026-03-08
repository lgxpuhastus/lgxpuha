import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, ArrowLeft, ChevronDown } from 'lucide-react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

// Map URL slugs to translation keys
const slugToKey: Record<string, string> = {
  'regular-cleaning': 'regular',
  'deep-cleaning': 'deep',
  'move-out-cleaning': 'moveOut',
  'office-cleaning': 'office',
  'upholstery-cleaning': 'upholstery',
  'window-cleaning': 'window',
};

// Pricing keys for each service type
const pricingKeys: Record<string, string[]> = {
  regular: ['studio', '1bed', '2bed', '3bed', 'house'],
  deep: ['studio', '1bed', '2bed', '3bed', 'house'],
  moveOut: ['studio', '1bed', '2bed', '3bed', 'house'],
  office: ['small', 'medium', 'large'],
  upholstery: ['sofa2', 'sofa3', 'armchair', 'mattress'],
  window: ['perWindow', 'apartment', 'house'],
};

// FAQ keys for move-out service
const moveOutFaqKeys = ['deposit', 'booking', 'satisfaction', 'oven'];

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export function generateStaticParams() {
  return Object.keys(slugToKey).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const serviceKey = slugToKey[slug];
  
  if (!serviceKey) return { title: 'Service Not Found' };

  const t = await getTranslations({ locale, namespace: 'services' });
  const title = t(`${serviceKey}.title`);
  const description = t(`${serviceKey}.description`);

  const localeMap: Record<string, string> = {
    en: 'en_EE',
    et: 'et_EE',
    fi: 'fi_FI',
  };

  return {
    title: `${title} | LGX Puhastus`,
    description,
    keywords: `${title.toLowerCase()}, cleaning service tallinn, ${slug.replace(/-/g, ' ')}, professional cleaning estonia`,
    openGraph: {
      title: `${title} | LGX Puhastus`,
      description,
      url: `https://lgxpuhastus.ee/${locale}/services/${slug}`,
      siteName: 'LGX Puhastus',
      locale: localeMap[locale] || 'en_EE',
      type: 'website',
    },
    alternates: {
      canonical: `https://lgxpuhastus.ee/${locale}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  
  const serviceKey = slugToKey[slug];

  if (!serviceKey) {
    notFound();
  }

  const t = await getTranslations('services');
  const tCommon = await getTranslations('common');

  // Get service data from translations
  const title = t(`${serviceKey}.title`);
  const longDescription = t(`${serviceKey}.longDescription`);
  const perfectFor = t(`${serviceKey}.perfectFor`);
  const includes = t.raw(`includes.${serviceKey}`) as string[];
  
  // Get pricing data
  const pricing = pricingKeys[serviceKey].map((key) => ({
    type: t(`pricing.${serviceKey}.${key}.type`),
    price: t(`pricing.${serviceKey}.${key}.price`),
  }));

  // Check for additional content and FAQ (only for move-out)
  const hasAdditionalContent = serviceKey === 'moveOut';
  const hasFaq = serviceKey === 'moveOut';

  // Build FAQ schema if applicable
  let faqSchema = null;
  let faqItems: { question: string; answer: string }[] = [];
  
  if (hasFaq) {
    faqItems = moveOutFaqKeys.map((key) => ({
      question: t(`moveOut.faq.${key}.question`),
      answer: t(`moveOut.faq.${key}.answer`),
    }));
    
    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: tCommon('home'),
        item: `https://lgxpuhastus.ee/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('pageTitle'),
        item: `https://lgxpuhastus.ee/${locale}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://lgxpuhastus.ee/${locale}/services/${slug}`,
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
            <Link href="/" className="hover:text-sage-700">{tCommon('home')}</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-sage-700">{t('pageTitle')}</Link>
            <span className="mx-2">/</span>
            <span className="text-sage-700">{title}</span>
          </nav>
          <Link
            href="/services"
            className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            {tCommon('backToServices')}
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              {title}
            </h1>
            <p className="text-lg text-sage-600">
              {longDescription}
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
                {t('detail.whatIsIncluded')}
              </h2>
              <ul className="space-y-4">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sage-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sage-600 italic">
                {perfectFor}
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-sage-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-sage-900 mb-6">
                {t('detail.pricing')}
              </h2>
              <div className="space-y-4 mb-8">
                {pricing.map((item, index) => (
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
                {t('pricing.discountNote')}
              </p>
              <div className="space-y-4">
                <Link href="/calculator" className="btn-primary w-full text-center">
                  {tCommon('getQuote')}
                </Link>
                <a
                  href="https://wa.me/37253955896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {tCommon('whatsappUs')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content (Move-Out only) */}
      {hasAdditionalContent && (
        <section className="section-padding bg-sage-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-sage-900 mt-8 mb-4">
                {t('moveOut.additionalContent.title')}
              </h2>
              <p className="text-sage-700 leading-relaxed mb-6">
                {t('moveOut.additionalContent.intro')}
              </p>
              
              <h3 className="text-xl font-semibold text-sage-800 mt-6 mb-3">
                {t('moveOut.additionalContent.depositTitle')}
              </h3>
              <p className="text-sage-700 leading-relaxed mb-6">
                {t('moveOut.additionalContent.depositText')}
              </p>
              
              <h3 className="text-xl font-semibold text-sage-800 mt-6 mb-3">
                {t('moveOut.additionalContent.checklistTitle')}
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                {t('moveOut.additionalContent.checklistIntro')}
              </p>
              <ul className="space-y-2 mb-6">
                {(t.raw('moveOut.additionalContent.checklistItems') as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sage-700">
                    <span className="text-sage-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-sage-800 mt-6 mb-3">
                {t('moveOut.additionalContent.rendinTitle')}
              </h3>
              <p className="text-sage-700 leading-relaxed">
                {t('moveOut.additionalContent.rendinText')}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {hasFaq && faqItems.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-sage-900 mb-8 text-center">
                {t('detail.faq')}
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
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
              {t('detail.ctaTitle')}
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              {t('detail.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                {tCommon('contactUs')}
              </Link>
              <a
                href="https://wa.me/37253955896"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-sage-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {tCommon('whatsappUs')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

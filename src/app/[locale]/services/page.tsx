import { Metadata } from 'next';
import Image from 'next/image';
import { 
  Sparkles, 
  Home, 
  Truck, 
  Building2, 
  Sofa, 
  Square,
  ArrowRight
} from 'lucide-react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const serviceData = [
  { key: 'regular', href: '/services/regular-cleaning', icon: Home, priceAmount: 60, image: '/images/kitchen-clean.jpg' },
  { key: 'deep', href: '/services/deep-cleaning', icon: Sparkles, priceAmount: 100, image: '/images/bathroom-clean.jpg' },
  { key: 'moveOut', href: '/services/move-out-cleaning', icon: Truck, priceAmount: 120, image: '/images/moveout-clean.jpg' },
  { key: 'office', href: '/services/office-cleaning', icon: Building2, priceAmount: null, image: '/images/office-clean.jpg' },
  { key: 'upholstery', href: '/services/upholstery-cleaning', icon: Sofa, priceAmount: null, image: '/images/sofa-clean.jpg' },
  { key: 'window', href: '/services/window-cleaning', icon: Square, priceAmount: null, image: '/images/windows-clean.jpg' },
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('services');
  const tCommon = await getTranslations('common');

  const services = serviceData.map((s) => ({
    ...s,
    title: t(`${s.key}.title`),
    description: t(`${s.key}.longDescription`),
    includes: t.raw(`includes.${s.key}`) as string[],
    image: s.image,
    price: s.priceAmount 
      ? `${tCommon('from')} ${s.priceAmount} ${tCommon('eur')}`
      : tCommon('contactUs'),
  }));

  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              {t('pageTitle')}
            </h1>
            <p className="text-lg text-sage-600">
              {t('pageDescription')}
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
                        {tCommon('learnMore')} <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                  <div className={`relative rounded-xl aspect-video overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
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
              {t('ctaTitle')}
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-secondary">
                {tCommon('getQuote')}
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sage-700 font-medium rounded-lg hover:bg-sage-50 transition-colors">
                {tCommon('contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import PricingTable from '@/components/PricingTable';
import Disclaimer from '@/components/Disclaimer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricing' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const regularPrices = [
  { key: 'up30', amount: 60 },
  { key: '30to45', amount: 75 },
  { key: '45to60', amount: 90 },
  { key: '60to80', amount: 110 },
  { key: '80to100', amount: 130 },
  { key: '100plus', amount: 150, from: true },
];

const deepPrices = [
  { key: 'up30', amount: 120 },
  { key: '30to45', amount: 150 },
  { key: '45to60', amount: 200 },
  { key: '60to80', amount: 265 },
  { key: '80to100', amount: 330 },
  { key: '100plus', amount: 330, from: true },
];

const movePrices = [
  { key: 'up30', amount: 100 },
  { key: '30to45', amount: 145 },
  { key: '45to60', amount: 195 },
  { key: '60to80', amount: 260 },
  { key: '80to100', amount: 325 },
];

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('pricing');
  const tCommon = await getTranslations('common');

  const regularCleaning = regularPrices.map((item) => ({
    name: t(`propertyTypes.${item.key}`),
    price: item.from
      ? `${tCommon('from')} ${item.amount} ${tCommon('eur')}`
      : `${item.amount} ${tCommon('eur')}`,
  }));

  const deepCleaning = deepPrices.map((item) => ({
    name: t(`propertyTypes.${item.key}`),
    price: item.from
      ? `${tCommon('from')} ${item.amount} ${tCommon('eur')}`
      : `${item.amount} ${tCommon('eur')}`,
  }));

  const moveOutCleaning = movePrices.map((item) => ({
    name: t(`propertyTypes.${item.key}`),
    price: `${item.amount} ${tCommon('eur')}`,
  }));

  const goodToKnowItems = t.raw('goodToKnowItems') as string[];

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

      {/* Pricing Tables */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <PricingTable
              title={t('regularCleaning')}
              items={regularCleaning}
            />
            <PricingTable
              title={t('deepCleaning')}
              items={deepCleaning}
              highlighted
            />
            <PricingTable
              title={t('moveOutCleaning')}
              items={moveOutCleaning}
            />
          </div>

          <div className="mt-6 max-w-3xl mx-auto space-y-3">
            <Disclaimer text={t('disclaimers.condition')} variant="neutral" />
            <Disclaimer text={t('disclaimers.moveOut')} variant="warning" />
            <Disclaimer text={t('disclaimers.emptyProperty')} variant="info" />
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-sage-50 rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-sage-900 mb-4">
                {t('goodToKnow')}
              </h3>
              <ul className="space-y-3 text-sage-700">
                {goodToKnowItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-sage-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-sage-900 mb-4">
              {t('otherServices')}
            </h3>
            <p className="text-sage-600 mb-6">
              {t('otherServicesDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-primary">
                {t('usePriceCalculator')}
              </Link>
              <Link href="/contact" className="btn-secondary">
                {tCommon('contactUs')}
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
              {t('ctaTitle')}
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-secondary">
                {t('useCalculator')}
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

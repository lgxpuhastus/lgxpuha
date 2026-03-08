import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Calculator from '@/components/Calculator';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'calculator' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('calculator');
  const tCommon = await getTranslations('common');

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
              {t('howPricingWorks')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-sage-900 mb-2">{t('pricingFeatures.flatRate.title')}</h3>
                <p className="text-sage-600 text-sm">
                  {t('pricingFeatures.flatRate.description')}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-sage-900 mb-2">{t('pricingFeatures.discounts.title')}</h3>
                <p className="text-sage-600 text-sm">
                  {t('pricingFeatures.discounts.description')}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-sage-900 mb-2">{t('pricingFeatures.allInclusive.title')}</h3>
                <p className="text-sage-600 text-sm">
                  {t('pricingFeatures.allInclusive.description')}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-sage-900 mb-2">{t('pricingFeatures.customQuotes.title')}</h3>
                <p className="text-sage-600 text-sm">
                  {t('pricingFeatures.customQuotes.description')}
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
              {t('needMoreInfo')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-secondary">
                {tCommon('viewAllServices')}
              </Link>
              <Link href="/pricing" className="btn-secondary">
                {t('seeFullPricing')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

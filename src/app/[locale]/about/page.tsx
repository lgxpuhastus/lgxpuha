import { Metadata } from 'next';
// import Image from 'next/image'; // Hidden for now - Ana's photo
import { Heart, Shield, Eye, Phone } from 'lucide-react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

const valueIcons = [Shield, Heart, Eye];
const valueKeys = ['trust', 'care', 'attention'] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');
  const tCommon = await getTranslations('common');

  const values = valueKeys.map((key, index) => ({
    icon: valueIcons[index],
    title: t(`values.${key}.title`),
    description: t(`values.${key}.description`),
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

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">
                {t('ourStory')}
              </h2>
              <div className="space-y-4 text-sage-600">
                <p>{t('storyParagraph1')}</p>
                <p>{t('storyParagraph2')}</p>
                <p>{t('storyParagraph3')}</p>
              </div>
            </div>
{/* Photo hidden for now
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
*/}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">
              {t('ourValues')}
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              {t('valuesDescription')}
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
              {t('companyInfo')}
            </h2>
            <div className="bg-sage-50 rounded-xl p-8">
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-sm text-sage-500 mb-1">{t('companyName')}</p>
                  <p className="font-semibold text-sage-900">LGX Puhastus OU</p>
                </div>
                <div>
                  <p className="text-sm text-sage-500 mb-1">{t('registrationNumber')}</p>
                  <p className="font-semibold text-sage-900">17031884</p>
                </div>
                <div>
                  <p className="text-sm text-sage-500 mb-1">{t('location')}</p>
                  <p className="font-semibold text-sage-900">Tallinn, Estonia</p>
                </div>
                <div>
                  <p className="text-sm text-sage-500 mb-1">{t('serviceArea')}</p>
                  <p className="font-semibold text-sage-900">Tallinn & Harjumaa</p>
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
              {t('ctaTitle')}
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              {t('ctaDescription')}
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

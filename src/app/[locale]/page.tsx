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
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import ServiceCard from '@/components/ServiceCard';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

const serviceKeys = [
  { key: 'regular', href: '/services/regular-cleaning', icon: Home },
  { key: 'deep', href: '/services/deep-cleaning', icon: Sparkles },
  { key: 'moveOut', href: '/services/move-out-cleaning', icon: Truck },
  { key: 'office', href: '/services/office-cleaning', icon: Building2 },
  { key: 'upholstery', href: '/services/upholstery-cleaning', icon: Sofa },
  { key: 'window', href: '/services/window-cleaning', icon: Square },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');
  const tTrust = await getTranslations('trustSignals');
  const tServices = await getTranslations('services');
  const tSteps = await getTranslations('steps');

  const services = serviceKeys.map((s) => ({
    title: tServices(`${s.key}.title`),
    description: tServices(`${s.key}.description`),
    href: s.href,
    icon: s.icon,
  }));

  const steps = [
    { step: '1', title: tSteps('step1.title'), description: tSteps('step1.description') },
    { step: '2', title: tSteps('step2.title'), description: tSteps('step2.description') },
    { step: '3', title: tSteps('step3.title'), description: tSteps('step3.description') },
    { step: '4', title: tSteps('step4.title'), description: tSteps('step4.description') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="Clean, bright living room in Tallinn"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/85 via-sage-900/70 to-sage-900/40" />
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-sage-100 mb-8">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/calculator" className="btn-primary">
                {tCommon('getQuote')}
              </Link>
              <a
                href="https://wa.me/37253955896"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <Phone className="h-5 w-5 mr-2" />
                {tCommon('whatsappUs')}
              </a>
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
              <p className="text-2xl font-bold text-sage-900">{tTrust('since')}</p>
              <p className="text-sage-600 text-sm">{tTrust('servingTallinn')}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-full mx-auto mb-3">
                <Users className="h-6 w-6 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-sage-900">100+</p>
              <p className="text-sage-600 text-sm">{tTrust('happyClients')}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-full mx-auto mb-3">
                <Star className="h-6 w-6 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-sage-900">5.0</p>
              <p className="text-sage-600 text-sm">{tTrust('googleRating')}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-full mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-sage-900">100%</p>
              <p className="text-sage-600 text-sm">{tTrust('satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              {t('servicesDescription')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-secondary">
              {tCommon('viewAllServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
              {t('howItWorks')}
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              {t('howItWorksDescription')}
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
              {t('testimonialsTitle')}
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              {t('testimonialsDescription')}
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
                {t('faqTitle')}
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
              {t('ctaTitle')}
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="btn-secondary">
                {tCommon('getQuote')}
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

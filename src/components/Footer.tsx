'use client';

import { MapPin, Mail, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');

  const navigation = {
    services: [
      { name: t('regularCleaning'), href: '/services/regular-cleaning' },
      { name: t('deepCleaning'), href: '/services/deep-cleaning' },
      { name: t('moveOutCleaning'), href: '/services/move-out-cleaning' },
      { name: t('officeCleaning'), href: '/services/office-cleaning' },
    ],
    company: [
      { name: t('aboutUs'), href: '/about' },
      { name: t('pricing'), href: '/pricing' },
      { name: t('gallery'), href: '/gallery' },
      { name: t('blog'), href: '/blog' },
      { name: t('contact'), href: '/contact' },
    ],
    legal: [
      { name: t('privacyPolicy'), href: '/privacy-policy' },
      { name: t('termsOfService'), href: '/terms' },
    ],
  };

  return (
    <footer className="bg-sage-900 text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">LGX Puhastus OÜ</h3>
            <p className="text-sage-300 text-sm mb-4">
              {t('companyDescription')}
            </p>
            <div className="space-y-2 text-sm text-sage-300">
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                {t('location')}
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                lgxpuhastusou@gmail.com
              </p>
              <a 
                href="https://wa.me/37253955896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                +372 5395 5896
              </a>
            </div>
            <p className="text-sage-400 text-xs mt-4">Reg: 17031884</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sage-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sage-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('businessHours')}</h3>
            <div className="text-sage-300 text-sm space-y-1 mb-6">
              <p>{t('weekdays')}</p>
              <p>{t('weekends')}</p>
            </div>
            <h3 className="text-lg font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sage-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sage-400 text-sm">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-sage-400 text-sm mt-4 sm:mt-0">
            {t('websiteBy')}{' '}
            <a
              href="https://barqai.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-300 hover:text-white transition-colors"
            >
              Barq AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

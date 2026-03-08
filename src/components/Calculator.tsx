'use client';

import { useState } from 'react';
import { Calculator as CalcIcon, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

const propertyData = [
  { value: 'studio', regularPrice: 60, deepPrice: 100, movePrice: 120 },
  { value: '1bed', regularPrice: 75, deepPrice: 120, movePrice: 150 },
  { value: '2bed', regularPrice: 90, deepPrice: 180, movePrice: 220 },
  { value: '3bed', regularPrice: 105, deepPrice: 220, movePrice: 260 },
  { value: 'house', regularPrice: 120, deepPrice: 260, movePrice: 320 },
];

const serviceData = [
  { value: 'regular', priceKey: 'regularPrice' as const },
  { value: 'deep', priceKey: 'deepPrice' as const },
  { value: 'move', priceKey: 'movePrice' as const },
];

export default function Calculator() {
  const t = useTranslations('calculator');
  const tCommon = useTranslations('common');

  const [propertyType, setPropertyType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showForm, setShowForm] = useState(false);

  const propertyTypes = propertyData.map((p) => ({
    ...p,
    label: t(`propertyTypes.${p.value}`),
  }));

  const serviceTypes = serviceData.map((s) => ({
    ...s,
    label: t(`serviceTypes.${s.value}`),
  }));

  const calculatePrice = () => {
    if (!propertyType || !serviceType) return null;
    
    const property = propertyData.find(p => p.value === propertyType);
    const service = serviceData.find(s => s.value === serviceType);
    
    if (!property || !service) return null;
    
    return property[service.priceKey];
  };

  const price = calculatePrice();

  const handleGetQuote = () => {
    if (price) {
      setShowForm(true);
    }
  };

  const selectedProperty = propertyTypes.find(p => p.value === propertyType);
  const selectedService = serviceTypes.find(s => s.value === serviceType);

  return (
    <div className="bg-white rounded-xl border border-sage-200 p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-lg">
          <CalcIcon className="h-6 w-6 text-sage-600" />
        </div>
        <h2 className="text-2xl font-semibold text-sage-900">{t('title')}</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-sage-700 mb-2">
            {t('propertyType')}
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
          >
            <option value="">{t('selectPropertyType')}</option>
            {propertyTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-sage-700 mb-2">
            {t('serviceType')}
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
          >
            <option value="">{t('selectServiceType')}</option>
            {serviceTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {price && (
          <div className="bg-sage-50 rounded-lg p-6 text-center">
            <p className="text-sage-600 mb-2">{t('estimatedPrice')}</p>
            <p className="text-4xl font-bold text-sage-900">
              {tCommon('from')} {price} EUR
            </p>
            <p className="text-sm text-sage-500 mt-2">
              {t('priceNote')}
            </p>
          </div>
        )}

        {showForm ? (
          <div className="space-y-4 pt-4 border-t border-sage-200">
            <h3 className="font-semibold text-sage-900">{t('getExactQuote')}</h3>
            <input
              type="text"
              placeholder={t('yourName')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder={t('yourEmail')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <input
              type="tel"
              placeholder={t('yourPhone')}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <a
              href={`https://wa.me/37253955896?text=${encodeURIComponent(t('whatsappMessage', { service: selectedService?.label ?? '', property: selectedProperty?.label ?? '', price: price ?? '' }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {t('getExactQuoteWhatsApp')}
            </a>
          </div>
        ) : (
          <button
            onClick={handleGetQuote}
            disabled={!price}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {tCommon('getQuote')}
          </button>
        )}
      </div>
    </div>
  );
}

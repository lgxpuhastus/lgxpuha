'use client';

import { useState } from 'react';
import { Calculator as CalcIcon, MessageCircle } from 'lucide-react';

const propertyTypes = [
  { value: 'studio', label: 'Studio', regularPrice: 70, deepPrice: 120, movePrice: 150 },
  { value: '1bed', label: '1 Bedroom', regularPrice: 80, deepPrice: 150, movePrice: 180 },
  { value: '2bed', label: '2 Bedroom', regularPrice: 90, deepPrice: 180, movePrice: 220 },
  { value: '3bed', label: '3 Bedroom', regularPrice: 105, deepPrice: 220, movePrice: 260 },
  { value: 'house', label: 'House', regularPrice: 120, deepPrice: 260, movePrice: 320 },
];

const serviceTypes = [
  { value: 'regular', label: 'Regular Cleaning', priceKey: 'regularPrice' as const },
  { value: 'deep', label: 'Deep Cleaning', priceKey: 'deepPrice' as const },
  { value: 'move', label: 'Move In/Out Cleaning', priceKey: 'movePrice' as const },
];

export default function Calculator() {
  const [propertyType, setPropertyType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showForm, setShowForm] = useState(false);

  const calculatePrice = () => {
    if (!propertyType || !serviceType) return null;
    
    const property = propertyTypes.find(p => p.value === propertyType);
    const service = serviceTypes.find(s => s.value === serviceType);
    
    if (!property || !service) return null;
    
    return property[service.priceKey];
  };

  const price = calculatePrice();

  const handleGetQuote = () => {
    if (price) {
      setShowForm(true);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-sage-200 p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-lg">
          <CalcIcon className="h-6 w-6 text-sage-600" />
        </div>
        <h2 className="text-2xl font-semibold text-sage-900">Price Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-sage-700 mb-2">
            Property Type
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
          >
            <option value="">Select property type</option>
            {propertyTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-sage-700 mb-2">
            Service Type
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
          >
            <option value="">Select service type</option>
            {serviceTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {price && (
          <div className="bg-sage-50 rounded-lg p-6 text-center">
            <p className="text-sage-600 mb-2">Estimated Price</p>
            <p className="text-4xl font-bold text-sage-900">
              from {price} EUR
            </p>
            <p className="text-sm text-sage-500 mt-2">
              Final price may vary based on property condition
            </p>
          </div>
        )}

        {showForm ? (
          <div className="space-y-4 pt-4 border-t border-sage-200">
            <h3 className="font-semibold text-sage-900">Get an exact quote</h3>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <input
              type="tel"
              placeholder="Your phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
            <a
              href={`https://wa.me/372XXXXXXXX?text=Hi! I am interested in ${serviceTypes.find(s => s.value === serviceType)?.label} for my ${propertyTypes.find(p => p.value === propertyType)?.label}. Estimated price: from ${price} EUR.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Exact Quote via WhatsApp
            </a>
          </div>
        ) : (
          <button
            onClick={handleGetQuote}
            disabled={!price}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get Quote
          </button>
        )}
      </div>
    </div>
  );
}

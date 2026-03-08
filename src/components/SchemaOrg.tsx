interface SchemaTranslations {
  businessDescription: string;
  serviceType: string;
  offerCatalogName: string;
  regularCleaningName: string;
  regularCleaningDescription: string;
  deepCleaningName: string;
  deepCleaningDescription: string;
  moveOutCleaningName: string;
  moveOutCleaningDescription: string;
}

interface SchemaOrgProps {
  locale: string;
  translations: SchemaTranslations;
}

export default function SchemaOrg({ locale, translations }: SchemaOrgProps) {
  const baseUrl = 'https://lgxpuhastus.com';
  const canonicalUrl = locale === 'et' ? baseUrl : `${baseUrl}/${locale}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${canonicalUrl}/#organization`,
    "name": "LGX Puhastus OÜ",
    "description": translations.businessDescription,
    "url": canonicalUrl,
    "telephone": "+37253955896",
    "email": "lgxpuhastusou@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tallinn",
      "addressCountry": "EE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "59.4370",
      "longitude": "24.7536"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Tallinn"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Harjumaa"
      }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": []
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": translations.serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "LGX Puhastus OÜ"
    },
    "areaServed": {
      "@type": "City",
      "name": "Tallinn"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": translations.offerCatalogName,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": translations.regularCleaningName,
            "description": translations.regularCleaningDescription
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": translations.deepCleaningName,
            "description": translations.deepCleaningDescription
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": translations.moveOutCleaningName,
            "description": translations.moveOutCleaningDescription
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

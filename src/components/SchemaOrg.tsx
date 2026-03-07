export default function SchemaOrg() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ana.barqai.agency/#organization",
    "name": "LGX Puhastus OU",
    "description": "Professional cleaning services in Tallinn and Harjumaa. Regular cleaning, deep cleaning, move in/out cleaning, office cleaning, and more.",
    "url": "https://ana.barqai.agency",
    "telephone": "+372XXXXXXXX",
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
    "serviceType": "Cleaning Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LGX Puhastus OU"
    },
    "areaServed": {
      "@type": "City",
      "name": "Tallinn"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Regular Home Cleaning",
            "description": "Professional maintenance cleaning to keep your home fresh and comfortable."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning",
            "description": "Detailed cleaning for homes that need extra care."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Move In/Out Cleaning",
            "description": "Comprehensive cleaning for empty homes before moving in or after moving out."
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

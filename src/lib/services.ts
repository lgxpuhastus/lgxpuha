export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  includes: string[];
  pricing: { type: string; price: string }[];
  perfectFor: string;
  additionalContent?: string;
  faq?: { question: string; answer: string }[];
}

export const services: Record<string, ServiceData> = {
  'regular-cleaning': {
    slug: 'regular-cleaning',
    title: 'Regular Home Cleaning',
    description: 'Professional home cleaning in Tallinn. Weekly and bi-weekly maintenance cleaning to keep your home fresh, clean, and comfortable. Trusted by 100+ families.',
    longDescription: 'Professional maintenance cleaning designed to keep your home consistently fresh, clean, and comfortable. Our regular cleaning service is perfect for busy families and professionals who want to maintain a clean home without the hassle. We bring all supplies and equipment, so you can simply relax while we take care of everything.',
    includes: [
      'Dusting and cleaning all accessible surfaces',
      'Vacuuming and mopping all floors',
      'Bathroom cleaning (toilet, sink, shower area)',
      'Kitchen surface and appliance exterior cleaning',
      'Mirror and glass cleaning',
      'General dust removal',
      'Trash removal and bin cleaning',
    ],
    pricing: [
      { type: 'Studio', price: 'from 70 EUR' },
      { type: '1 Bedroom', price: 'from 80 EUR' },
      { type: '2 Bedroom', price: 'from 90 EUR' },
      { type: '3 Bedroom', price: 'from 105 EUR' },
      { type: 'House', price: 'from 120 EUR' },
    ],
    perfectFor: 'Perfect for weekly or bi-weekly home maintenance. Most popular among busy professionals and families in Tallinn.',
  },
  'deep-cleaning': {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning service in Tallinn. We clean inside cabinets, appliances, and hard-to-reach areas. Ideal for seasonal cleaning or first-time service.',
    longDescription: 'A detailed cleaning service recommended for homes that require extra care or have not been professionally cleaned recently. Our deep cleaning service goes beyond the surface to ensure every corner of your home is thoroughly cleaned. This is the perfect choice if you are moving into a new place, preparing for guests, or simply want a fresh start.',
    includes: [
      'Everything in Regular Cleaning',
      'Cleaning inside cabinets and drawers',
      'Interior cleaning of kitchen appliances (oven, microwave, refrigerator)',
      'Detailed bathroom cleaning with limescale removal',
      'Cleaning behind and under furniture where accessible',
      'Cleaning reachable wall areas when necessary',
      'Thorough cleaning of all surfaces including baseboards',
      'Light fixture and ceiling fan dusting',
    ],
    pricing: [
      { type: 'Studio', price: 'from 120 EUR' },
      { type: '1 Bedroom', price: 'from 150 EUR' },
      { type: '2 Bedroom', price: 'from 180 EUR' },
      { type: '3 Bedroom', price: 'from 220 EUR' },
      { type: 'House', price: 'from 260 EUR' },
    ],
    perfectFor: 'Ideal for seasonal cleaning, first-time service, or preparing your home for special occasions.',
  },
  'move-out-cleaning': {
    slug: 'move-out-cleaning',
    title: 'Move In/Out Cleaning',
    description: 'Professional move-out cleaning in Tallinn to help you get your deposit back. End of tenancy cleaning for apartments and houses. Trusted by tenants and landlords.',
    longDescription: 'A comprehensive cleaning designed for empty homes before moving in or after moving out. This service ensures your property is spotless for the next occupant or ready to welcome you to your new home. Our move-out cleaning meets the standards expected by landlords and property managers in Tallinn, helping you protect your deposit.',
    includes: [
      'Cleaning inside and outside of cabinets and drawers',
      'Interior appliance cleaning (oven, refrigerator, microwave)',
      'Full bathroom descaling and sanitizing',
      'Limescale removal from taps and showerheads',
      'Vacuuming and mopping all floors',
      'Cleaning reachable wall areas if needed',
      'Interior window cleaning',
      'Cleaning all surfaces, mirrors, and light switches',
      'Removal of dust from all corners and edges',
    ],
    pricing: [
      { type: 'Studio', price: 'from 150 EUR' },
      { type: '1 Bedroom', price: 'from 180 EUR' },
      { type: '2 Bedroom', price: 'from 220 EUR' },
      { type: '3 Bedroom', price: 'from 260 EUR' },
      { type: 'House', price: 'from 320 EUR' },
    ],
    perfectFor: 'Recommended for tenants, landlords, and property managers. Help protect your deposit with professional cleaning.',
    additionalContent: `
## Why Professional Move-Out Cleaning Matters in Tallinn

Moving out of a rental apartment in Tallinn can be stressful, especially when your deposit is on the line. Many landlords in Estonia require the property to be returned in the same condition it was received, which often means professional-level cleaning.

### Protect Your Deposit

We understand that getting your full deposit back matters. Our thorough move-out cleaning service is designed to meet the standards expected by landlords and property management companies in Tallinn and Harjumaa. We pay attention to the details that landlords check: limescale on taps, grease in the oven, dust in cabinets, and more.

### What Landlords Look For

Based on our experience working with tenants across Tallinn, here are the most common areas landlords inspect:
- Kitchen appliances (inside oven, refrigerator, microwave)
- Bathroom fixtures (limescale on taps, shower glass, toilet)
- Cabinet interiors (kitchen and wardrobes)
- Window cleanliness
- Floor condition
- Wall marks and scuffs

### Avoid Disputes with Rendin and Landlords

If you are renting through Rendin or a similar service, professional cleaning documentation can help resolve any disputes about the property condition. We provide thorough cleaning that meets professional standards.
    `,
    faq: [
      {
        question: 'Will this cleaning help me get my deposit back?',
        answer: 'Our move-out cleaning is designed to meet the standards landlords expect. While we cannot guarantee deposit return (that depends on your landlord and lease terms), our thorough cleaning addresses all the common issues landlords check.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 3-5 days in advance. However, we often accommodate last-minute requests if our schedule allows.',
      },
      {
        question: 'What if my landlord is not satisfied?',
        answer: 'Customer satisfaction is our priority. If any issues are raised within 24 hours of cleaning, we will return to address them at no additional cost.',
      },
      {
        question: 'Do you clean the oven inside?',
        answer: 'Yes, interior appliance cleaning is included in our move-out service. We clean inside the oven, refrigerator, and microwave.',
      },
    ],
  },
  'office-cleaning': {
    slug: 'office-cleaning',
    title: 'Office Cleaning',
    description: 'Professional office cleaning services in Tallinn for businesses of all sizes. Maintain a clean, healthy workspace for your employees and clients.',
    longDescription: 'Reliable cleaning services for offices and small commercial spaces. Keep your workspace professional, clean, and welcoming for your employees and clients. A clean office improves productivity, makes a great impression on visitors, and contributes to a healthier work environment.',
    includes: [
      'Desk and surface cleaning',
      'Floor vacuuming and mopping',
      'Bathroom and kitchen area cleaning',
      'Mirror and glass cleaning',
      'Trash removal and bin cleaning',
      'General dusting of all surfaces',
      'Door handle and light switch sanitizing',
    ],
    pricing: [
      { type: 'Small Office', price: 'Contact us' },
      { type: 'Medium Office', price: 'Contact us' },
      { type: 'Large Office', price: 'Contact us' },
    ],
    perfectFor: 'Perfect for maintaining a professional workspace. Flexible scheduling available for daily, weekly, or monthly service.',
  },
  'upholstery-cleaning': {
    slug: 'upholstery-cleaning',
    title: 'Upholstery Cleaning',
    description: 'Professional sofa and furniture cleaning in Tallinn. Remove stains, dirt, and odors from your upholstered furniture. Restore your furniture to its original freshness.',
    longDescription: 'Professional deep cleaning for sofas, armchairs, and other upholstered furniture to remove dirt, stains and odors. Over time, upholstered furniture accumulates dust, allergens, and stains that regular vacuuming cannot remove. Our professional cleaning restores your furniture to its original freshness and extends its lifespan.',
    includes: [
      'Deep fabric cleaning and extraction',
      'Stain removal treatment',
      'Odor elimination',
      'Allergen removal',
      'Fabric protection treatment (upon request)',
    ],
    pricing: [
      { type: 'Sofa (2-seater)', price: 'Contact us' },
      { type: 'Sofa (3-seater)', price: 'Contact us' },
      { type: 'Armchair', price: 'Contact us' },
      { type: 'Mattress', price: 'Contact us' },
    ],
    perfectFor: 'Contact us for a personalized quote based on your furniture type and condition.',
  },
  'window-cleaning': {
    slug: 'window-cleaning',
    title: 'Window Cleaning',
    description: 'Professional window cleaning service in Tallinn. Streak-free, sparkling clean windows for homes and offices. Interior and exterior cleaning available.',
    longDescription: 'Professional window cleaning service for crystal clear views. We ensure streak-free, sparkling clean windows that let the light shine through. Clean windows make a significant difference in how bright and welcoming your space feels.',
    includes: [
      'Interior window glass cleaning',
      'Frame and sill cleaning',
      'Streak-free finish',
      'Screen cleaning (upon request)',
      'Hard water stain removal',
    ],
    pricing: [
      { type: 'Per window', price: 'Contact us' },
      { type: 'Full apartment', price: 'Contact us' },
      { type: 'House', price: 'Contact us' },
    ],
    perfectFor: 'Contact us for a personalized quote based on the number and size of windows.',
  },
};

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | LGX Puhastus',
  description: 'Terms of Service for LGX Puhastus OÜ cleaning services in Tallinn and Harjumaa.',
};

export default function TermsPage() {
  return (
    <main className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-sage-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-sage max-w-none">
            <p className="text-sage-600 mb-6">
              Last updated: March 2025
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              1. Services
            </h2>
            <p className="text-sage-600 mb-4">
              LGX Puhastus OÜ (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides professional cleaning services 
              in Tallinn and Harjumaa, Estonia. Our services include regular cleaning, 
              deep cleaning, move-in/move-out cleaning, and office cleaning.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              2. Booking and Cancellation
            </h2>
            <p className="text-sage-600 mb-4">
              Bookings can be made via WhatsApp, phone, or our website contact form. 
              We require at least 24 hours notice for cancellations. Cancellations 
              made less than 24 hours before the scheduled service may incur a 
              cancellation fee of up to 50% of the service cost.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              3. Pricing and Payment
            </h2>
            <p className="text-sage-600 mb-4">
              Prices are quoted based on the size of the property and type of service 
              requested. Final pricing may be adjusted based on the actual condition 
              of the property. Payment is due upon completion of services unless 
              otherwise agreed in writing.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              4. Access and Preparation
            </h2>
            <p className="text-sage-600 mb-4">
              Clients must provide access to the property at the scheduled time. 
              We recommend removing valuable or fragile items before our arrival. 
              We are not responsible for items left in areas to be cleaned.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              5. Supplies and Equipment
            </h2>
            <p className="text-sage-600 mb-4">
              We bring our own professional cleaning supplies and equipment. 
              If you have specific products you prefer us to use, please inform 
              us in advance and have them available.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              6. Satisfaction Guarantee
            </h2>
            <p className="text-sage-600 mb-4">
              We strive for complete customer satisfaction. If you are not satisfied 
              with any aspect of our cleaning, please contact us within 24 hours 
              and we will return to address the issue at no additional cost.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              7. Liability
            </h2>
            <p className="text-sage-600 mb-4">
              While we take great care in our work, we are not liable for damage 
              to items that are inherently fragile, poorly maintained, or not 
              disclosed to us before cleaning. Our liability is limited to the 
              cost of the cleaning service provided.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              8. Privacy
            </h2>
            <p className="text-sage-600 mb-4">
              We respect your privacy and handle all personal information in 
              accordance with our Privacy Policy and applicable Estonian and 
              EU data protection laws.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-sage-600 mb-4">
              We reserve the right to update these terms at any time. Continued 
              use of our services constitutes acceptance of any changes.
            </p>

            <h2 className="text-xl font-semibold text-sage-900 mt-8 mb-4">
              10. Contact
            </h2>
            <p className="text-sage-600 mb-4">
              For questions about these terms, please contact us:
            </p>
            <ul className="text-sage-600 mb-4 list-none pl-0">
              <li>LGX Puhastus OÜ</li>
              <li>Registry code: 17031884</li>
              <li>Email: lgxpuhastusou@gmail.com</li>
              <li>Phone: +372 5395 5896</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

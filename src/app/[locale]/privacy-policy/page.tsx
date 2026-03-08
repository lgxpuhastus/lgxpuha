import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for LGX Puhastus OU. Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-sage-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-sage-600">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-sage">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">1. Introduction</h2>
                <p className="text-sage-600">
                  LGX Puhastus OU (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our cleaning services or visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">2. Information We Collect</h2>
                <p className="text-sage-600 mb-4">
                  We collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-sage-600 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Property address for service delivery</li>
                  <li>Service preferences and special instructions</li>
                  <li>Communication records between you and our team</li>
                  <li>Payment information (processed securely through our payment providers)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-sage-600 mb-4">
                  We use your personal information to:
                </p>
                <ul className="list-disc pl-6 text-sage-600 space-y-2">
                  <li>Provide and improve our cleaning services</li>
                  <li>Communicate with you about appointments and services</li>
                  <li>Process payments and send invoices</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send service reminders and follow-ups</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">4. Data Protection</h2>
                <p className="text-sage-600">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Access to your personal information is limited to employees who need it to provide our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">5. Data Sharing</h2>
                <p className="text-sage-600">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only with service providers who assist us in operating our business (such as payment processors) and only to the extent necessary to provide our services to you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">6. Your Rights (GDPR)</h2>
                <p className="text-sage-600 mb-4">
                  Under the General Data Protection Regulation (GDPR), you have the following rights:
                </p>
                <ul className="list-disc pl-6 text-sage-600 space-y-2">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
                <p className="text-sage-600 mt-4">
                  To exercise any of these rights, please contact us at lgxpuhastusou@gmail.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">7. Data Retention</h2>
                <p className="text-sage-600">
                  We retain your personal information only for as long as necessary to provide our services and comply with legal obligations. When your data is no longer needed, we will securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">8. Cookies</h2>
                <p className="text-sage-600">
                  Our website may use cookies to improve your browsing experience. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-sage-600">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-sage-900 mb-4">10. Contact Us</h2>
                <p className="text-sage-600">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-4 bg-sage-50 rounded-lg">
                  <p className="text-sage-900 font-semibold">LGX Puhastus OU</p>
                  <p className="text-sage-600">Registration Number: 17031884</p>
                  <p className="text-sage-600">Email: lgxpuhastusou@gmail.com</p>
                  <p className="text-sage-600">Location: Tallinn, Estonia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

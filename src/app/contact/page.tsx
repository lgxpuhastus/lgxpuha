import { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact LGX Puhastus for professional cleaning services in Tallinn. Reach us via WhatsApp, phone, or email.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-sage-600">
              Ready to book a cleaning or have questions? We are here to help. Reach out to us and we will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-sage-900 mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-sage-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <a
                  href="https://wa.me/372XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sage-900">WhatsApp</p>
                    <p className="text-sage-600">+372 XXXX XXXX</p>
                    <p className="text-sm text-green-600 mt-1">Click to chat with us</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-sage-50 rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-sage-200 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sage-900">Email</p>
                    <a href="mailto:lgxpuhastusou@gmail.com" className="text-sage-600 hover:text-sage-800">
                      lgxpuhastusou@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-sage-50 rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-sage-200 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sage-900">Location</p>
                    <p className="text-sage-600">Tallinn, Estonia</p>
                    <p className="text-sm text-sage-500 mt-1">Serving Tallinn and Harjumaa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-sage-50 rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-sage-200 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-sage-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sage-900">Business Hours</p>
                    <p className="text-sage-600">Monday - Friday: 8:00 - 18:00</p>
                    <p className="text-sage-600">Weekends: By arrangement</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-sage-600 rounded-xl text-white">
                <h3 className="font-semibold mb-2">Moving out soon?</h3>
                <p className="text-sage-100 text-sm">
                  We often accommodate last-minute requests. Contact us via WhatsApp for the fastest response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

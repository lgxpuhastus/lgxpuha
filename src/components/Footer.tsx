import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

const navigation = {
  services: [
    { name: 'Regular Cleaning', href: '/services/regular-cleaning' },
    { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
    { name: 'Move In/Out Cleaning', href: '/services/move-out-cleaning' },
    { name: 'Office Cleaning', href: '/services/office-cleaning' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">LGX Puhastus OU</h3>
            <p className="text-sage-300 text-sm mb-4">
              Your home in caring hands. Professional cleaning services in Tallinn and Harjumaa.
            </p>
            <div className="space-y-2 text-sm text-sage-300">
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                Tallinn, Estonia
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                lgxpuhastusou@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                +372 XXXX XXXX
              </p>
            </div>
            <p className="text-sage-400 text-xs mt-4">Reg: 17031884</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
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
            <h3 className="text-lg font-semibold mb-4">Company</h3>
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
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="text-sage-300 text-sm space-y-1 mb-6">
              <p>Monday - Friday: 8:00 - 18:00</p>
              <p>Weekends: By arrangement</p>
            </div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
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
            2025 LGX Puhastus OU. All rights reserved.
          </p>
          <p className="text-sage-400 text-sm mt-4 sm:mt-0">
            Website by{' '}
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

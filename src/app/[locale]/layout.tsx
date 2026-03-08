import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { locales, type Locale } from '@/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SchemaOrg from '@/components/SchemaOrg';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata with hreflang
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages();
  const t = messages.metadata as Record<string, string>;

  const baseUrl = 'https://lgxpuhastus.ee';

  // Generate alternate links for hreflang
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = loc === 'et' ? baseUrl : `${baseUrl}/${loc}`;
  });
  languages['x-default'] = baseUrl;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t?.title || 'LGX Puhastus | Professional Cleaning Services in Tallinn',
      template: '%s | LGX Puhastus',
    },
    description:
      t?.description ||
      'Your home in caring hands. Professional cleaning services in Tallinn and Harjumaa.',
    alternates: {
      canonical: locale === 'et' ? baseUrl : `${baseUrl}/${locale}`,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: locale === 'et' ? 'et_EE' : locale === 'fi' ? 'fi_FI' : 'en_GB',
      url: locale === 'et' ? baseUrl : `${baseUrl}/${locale}`,
      siteName: 'LGX Puhastus',
      title: t?.title || 'LGX Puhastus | Professional Cleaning Services in Tallinn',
      description:
        t?.description ||
        'Your home in caring hands. Professional cleaning services in Tallinn and Harjumaa.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'LGX Puhastus - Professional Cleaning Services in Tallinn',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  // Extract schema translations
  const schemaMessages = messages.schema as Record<string, string>;
  const schemaTranslations = {
    businessDescription: schemaMessages?.businessDescription || '',
    serviceType: schemaMessages?.serviceType || '',
    offerCatalogName: schemaMessages?.offerCatalogName || '',
    regularCleaningName: schemaMessages?.regularCleaningName || '',
    regularCleaningDescription: schemaMessages?.regularCleaningDescription || '',
    deepCleaningName: schemaMessages?.deepCleaningName || '',
    deepCleaningDescription: schemaMessages?.deepCleaningDescription || '',
    moveOutCleaningName: schemaMessages?.moveOutCleaningName || '',
    moveOutCleaningDescription: schemaMessages?.moveOutCleaningDescription || '',
  };

  return (
    <html lang={locale}>
      <head>
        <SchemaOrg locale={locale} translations={schemaTranslations} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

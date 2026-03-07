import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ana.barqai.agency"),
  title: {
    default: "LGX Puhastus | Professional Cleaning Services in Tallinn",
    template: "%s | LGX Puhastus"
  },
  description: "Your home in caring hands. Professional cleaning services in Tallinn and Harjumaa. Regular cleaning, deep cleaning, move in/out cleaning, and more. Trusted by 100+ happy clients.",
  keywords: [
    "cleaning services Tallinn",
    "house cleaning Estonia",
    "move out cleaning Tallinn",
    "professional cleaners Harjumaa",
    "end of tenancy cleaning Tallinn",
    "apartment cleaning Tallinn",
    "deep cleaning service Estonia",
    "office cleaning Tallinn",
    "cleaning company Tallinn",
    "home cleaning service Estonia"
  ],
  authors: [{ name: "LGX Puhastus OU" }],
  creator: "LGX Puhastus OU",
  publisher: "LGX Puhastus OU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_EE",
    url: "https://ana.barqai.agency",
    siteName: "LGX Puhastus",
    title: "LGX Puhastus | Professional Cleaning Services in Tallinn",
    description: "Your home in caring hands. Professional cleaning services in Tallinn and Harjumaa. Trusted by 100+ happy clients.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LGX Puhastus - Professional Cleaning Services in Tallinn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LGX Puhastus | Professional Cleaning Services in Tallinn",
    description: "Your home in caring hands. Professional cleaning services in Tallinn and Harjumaa.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

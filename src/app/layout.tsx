import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { ClientLayout } from './client-layout';

const inter = Inter({ subsets: ['latin', 'greek'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sifnosforanimals.org'),
  title: {
    default: 'Sifnos for Animals — Animal Rescue & Adoption on Sifnos Island',
    template: '%s | Sifnos for Animals',
  },
  description:
    'Sifnos for Animals is a registered nonprofit protecting and rehoming stray cats, dogs, and farm animals on the Greek island of Sifnos. Adopt, donate, or volunteer today.',
  keywords: [
    'Sifnos animals',
    'animal rescue Sifnos',
    'adopt a pet Greece',
    'stray animals Sifnos',
    'animal welfare Cyclades',
    'dog adoption Greece',
    'cat adoption Sifnos',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sifnosforanimals.org',
    siteName: 'Sifnos for Animals',
    title: 'Sifnos for Animals — Animal Rescue & Adoption',
    description:
      'Protecting and rehoming stray animals on the beautiful Greek island of Sifnos. Adopt, donate, or volunteer.',
    images: [
      {
        url: '/logofinal.jpg',
        width: 1200,
        height: 630,
        alt: 'Sifnos for Animals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sifnos for Animals — Animal Rescue & Adoption',
    description: 'Protecting and rehoming stray animals on Sifnos, Greece.',
    images: ['/logofinal.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Sifnos for Animals',
  alternateName: 'Σίφνος για τα Ζώα',
  url: 'https://www.sifnosforanimals.org',
  logo: 'https://www.sifnosforanimals.org/logofinal.jpg',
  description:
    'A formal Association for the Care and Protection of all the animals of Sifnos, Greece.',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Apollonia',
    addressRegion: 'Sifnos',
    addressCountry: 'GR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@sifnosforanimals.gr',
    contactType: 'customer support',
  },
  sameAs: [
    'https://www.facebook.com/sifnosforanimals',
    'https://www.instagram.com/sifnosforanimals',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}

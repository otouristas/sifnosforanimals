import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate to Help Sifnos Animals',
  description:
    'Support our mission to rescue, care for, and rehome stray animals on Sifnos. Donate via PayPal, Patreon, or bank transfer. Every euro makes a difference.',
  openGraph: {
    title: 'Donate — Sifnos for Animals',
    description: 'Help rescue and rehome stray animals on Sifnos, Greece. Monthly plans from €8.',
    url: 'https://www.sifnosforanimals.org/donate',
    images: [{ url: '/hero_image.jpg', width: 1200, height: 630, alt: 'Donate to Sifnos animals' }],
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Sifnos for Animals',
  description:
    'Learn how Sifnos for Animals was founded to protect stray cats, dogs, and farm animals on the Greek island of Sifnos. Our mission, story, and the change we are creating.',
  openGraph: {
    title: 'About Sifnos for Animals',
    description: 'Our mission: protecting every animal on the island of Sifnos, Greece.',
    url: 'https://www.sifnosforanimals.org/about',
    images: [{ url: '/hero_image.jpg', width: 1200, height: 630, alt: 'Sifnos for Animals' }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

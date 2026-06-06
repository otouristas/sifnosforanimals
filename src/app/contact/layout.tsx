import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Sifnos for Animals',
  description:
    'Get in touch with Sifnos for Animals. Reach us by email, visit us on Sifnos island, or follow us on social media. We would love to hear from you.',
  openGraph: {
    title: 'Contact — Sifnos for Animals',
    description: 'Contact our team on Sifnos, Greece. Adopt, volunteer, or ask anything.',
    url: 'https://www.sifnosforanimals.org/contact',
    images: [{ url: '/logofinal.jpg', width: 1200, height: 630, alt: 'Contact Sifnos for Animals' }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

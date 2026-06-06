import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Animal Stories & Tips from Sifnos',
  description:
    'Read adoption tips, success stories, and pet health articles from Sifnos for Animals. Follow our journey rescuing and rehoming animals on Sifnos island, Greece.',
  openGraph: {
    title: 'Blog — Sifnos for Animals',
    description: 'Stories, tips, and updates from our animal rescue work on Sifnos, Greece.',
    url: 'https://www.sifnosforanimals.org/blog',
    images: [{ url: '/blog/adoption-tips.jpg', width: 1200, height: 630, alt: 'Sifnos for Animals Blog' }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

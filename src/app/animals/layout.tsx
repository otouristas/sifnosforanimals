import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adopt a Pet from Sifnos — Dogs & Cats Available',
  description:
    'Browse dogs, cats, and small pets available for adoption from our shelter on Sifnos island, Greece. Find your perfect companion and give an animal a forever home.',
  openGraph: {
    title: 'Adopt a Pet from Sifnos, Greece',
    description: 'Dogs, cats, and more looking for loving homes on the island of Sifnos.',
    url: 'https://www.sifnosforanimals.org/animals',
    images: [{ url: '/hero_image.jpg', width: 1200, height: 630, alt: 'Adopt a pet from Sifnos' }],
  },
};

export default function AnimalsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

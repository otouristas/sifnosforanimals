'use client';

import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin', 'greek'] });

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navigation />
      <main className={inter.className}>{children}</main>
      <Footer />
      <Analytics />
    </>
  );
}

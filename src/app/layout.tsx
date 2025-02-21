// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import { ClientLayout } from './client-layout';

const inter = Inter({ subsets: ['latin', 'greek'] });

export const metadata: Metadata = {
  title: 'Sifnos for Animals',
  description: 'Help us continue our work for the stray animals of Sifnos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}

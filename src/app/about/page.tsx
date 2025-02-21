'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function AboutPage() {
  const { translations } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/hero_image.jpg"
            alt={translations.about.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {translations.about.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              {translations.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Paradise vs Reality Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 italic leading-relaxed">
              {translations.about.paradise.intro}
            </p>

            <div className="space-y-6 mt-8">
              {translations.about.paradise.reality.map((text: string, index: number) => (
                <p key={index} className="text-gray-800 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>

            <p className="text-xl font-semibold text-red-600 my-8">
              {translations.about.paradise.question}
            </p>

            <p className="text-gray-800 mt-8">
              {translations.about.paradise.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <ul className="space-y-4 text-gray-800 list-none pl-0">
              {translations.about.mission.points.map((point: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center space-y-6">
              <p className="text-xl text-gray-800">
                {translations.about.closing.support}
              </p>
              <p className="text-lg text-gray-600 italic">
                {translations.about.closing.greeting}
              </p>
              <p className="text-lg font-semibold text-gray-800">
                {translations.about.closing.signature}
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                {translations.about.cta.donate}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
              >
                {translations.about.cta.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

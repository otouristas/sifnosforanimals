'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const realityItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    color: 'bg-red-50 text-red-500 border-red-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    color: 'bg-orange-50 text-orange-500 border-orange-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    color: 'bg-yellow-50 text-yellow-600 border-yellow-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    color: 'bg-purple-50 text-purple-500 border-purple-100',
  },
];

export default function AboutPage() {
  const { translations } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_image.jpg"
            alt="About Sifnos for Animals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            {translations.about.title}
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            {translations.about.subtitle}
          </p>
        </div>
      </section>

      {/* ── Paradise Lost ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                {translations.about.paradise.title}
              </p>
              <h2 className="text-4xl font-black text-deep mb-6 leading-tight">
                {translations.about.paradise.subtitle}
              </h2>
              <p className="text-xl text-gray-500 italic leading-relaxed mb-8">
                {translations.about.paradise.intro}
              </p>
              <div className="space-y-4">
                {translations.about.paradise.reality.map((text: string, index: number) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-xl border ${realityItems[index]?.color || 'bg-gray-50 text-gray-500 border-gray-100'}`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {realityItems[index]?.icon}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
                <Image
                  src="/hero_image.jpg"
                  alt="The reality of animal life on Sifnos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Question callout */}
          <div className="mt-16 bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8 max-w-3xl mx-auto">
            <p className="text-2xl font-black text-red-600 leading-snug">
              &ldquo;{translations.about.paradise.question}&rdquo;
            </p>
            <p className="mt-6 text-gray-700 leading-relaxed">
              {translations.about.paradise.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              {translations.about.mission.subtitle}
            </p>
            <h2 className="text-4xl font-black text-deep">
              {translations.about.mission.title}
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 bg-primary rounded-full" />
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-primary/20 hidden sm:block" />

            <div className="space-y-6">
              {translations.about.mission.points.map((point: string, index: number) => (
                <div key={index} className="relative flex items-start gap-6 sm:gap-8">
                  {/* Step number */}
                  <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black text-lg shadow-md z-10">
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-2xl px-6 py-5 flex-1 shadow-sm border border-gray-100 card-lift">
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-20 bg-deep text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-blue-100 leading-relaxed">
            {translations.about.closing.support}
          </p>
          <p className="mt-8 text-xl text-blue-200 italic">
            {translations.about.closing.greeting}
          </p>
          <p className="mt-3 text-lg font-bold text-primary">
            {translations.about.closing.signature}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
            >
              {translations.about.cta.donate}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              {translations.about.cta.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

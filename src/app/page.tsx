'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCounter({ target, suffix = '+', label }: { target: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(target, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-black text-white">
        {count}{suffix}
      </div>
      <div className="mt-1 text-blue-200 text-sm font-medium uppercase tracking-wide">{label}</div>
    </div>
  );
}

const featuredAnimals = [
  {
    id: 'luna',
    name: 'Luna',
    breed: 'Mixed Breed',
    age: '2 years',
    type: 'Dog',
    image: '/animals/luna.jpg',
    waiting: '3 weeks',
  },
  {
    id: 'oliver',
    name: 'Oliver',
    breed: 'Domestic Shorthair',
    age: '1 year',
    type: 'Cat',
    image: '/animals/oliver.jpg',
    waiting: '5 weeks',
  },
  {
    id: 'max',
    name: 'Max',
    breed: 'Labrador Mix',
    age: '3 years',
    type: 'Dog',
    image: '/animals/max.jpg',
    waiting: '8 weeks',
  },
];

export default function HomePage() {
  const { translations } = useLanguage();

  const services = [
    {
      title: translations.homepage.services.animalRescue.title,
      description: translations.homepage.services.animalRescue.description,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: translations.homepage.services.medicalCare.title,
      description: translations.homepage.services.medicalCare.description,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m5.657-9.657A10 10 0 1 1 4.343 19.657 10 10 0 0 1 19.657 4.343z" />
        </svg>
      ),
    },
    {
      title: translations.homepage.services.petAdoption.title,
      description: translations.homepage.services.petAdoption.description,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: translations.homepage.services.petSupport.title,
      description: translations.homepage.services.petSupport.description,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_image.jpg"
            alt="Animals of Sifnos waiting for a loving home"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={90}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Urgency chip */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">12 animals need a home today</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              {translations.homepage.hero.title}
              <br />
              <span className="text-primary">{translations.homepage.hero.titleBreak}</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-xl leading-relaxed">
              {translations.homepage.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/animals"
                className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {translations.homepage.hero.cta}
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 border border-white/40 text-white px-8 py-4 rounded-full text-base font-bold transition-all"
              >
                {translations.navigation.donate}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Impact Stats Bar ── */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter target={500} label={translations.homepage.statistics.petsHelped} />
            <StatCounter target={300} label={translations.homepage.statistics.adoptions} />
            <StatCounter target={50} label={translations.homepage.statistics.volunteers} />
            <StatCounter target={10} label={translations.homepage.statistics.yearsOfService} />
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Help</p>
            <h2 className="text-4xl lg:text-5xl font-black text-deep">{translations.homepage.services.title}</h2>
            <div className="mx-auto mt-4 w-16 h-1 bg-primary rounded-full" />
            <p className="mt-6 text-gray-500 max-w-xl mx-auto text-lg">
              {translations.homepage.services.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 card-lift border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-deep mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Animals ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-3">Ready for Adoption</p>
            <h2 className="text-4xl lg:text-5xl font-black text-deep">{translations.homepage.featuredPets.title}</h2>
            <div className="mx-auto mt-4 w-16 h-1 bg-coral rounded-full" />
            <p className="mt-6 text-gray-500 max-w-xl mx-auto text-lg">
              {translations.homepage.featuredPets.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAnimals.map((animal) => (
              <Link key={animal.id} href={`/animals/${animal.id}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm card-lift border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={animal.image}
                      alt={`${animal.name} — ${animal.breed} available for adoption on Sifnos`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Available
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {animal.type}
                      </span>
                    </div>
                    {/* Adopt overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coral/90 to-transparent py-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">Adopt {animal.name} →</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-deep">{animal.name}</h3>
                      <span className="text-gray-400 text-sm">{animal.age}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{animal.breed}</p>
                    <p className="text-orange-400 text-xs font-medium mt-3">
                      ⏱ Waiting {animal.waiting}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/animals"
              className="inline-flex items-center gap-2 bg-deep hover:bg-deep-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
            >
              {translations.homepage.featuredPets.viewAll}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Story Strip ── */}
      <section className="py-20 px-4 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl font-black text-earth/30 leading-none mb-2">&ldquo;</div>
              <blockquote className="text-2xl lg:text-3xl font-black text-deep leading-snug -mt-6">
                How could a human&apos;s paradise possibly be an animal&apos;s hell?
              </blockquote>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Imagine your perfect little island on the Aegean sea. Crystal clear waters, cosy beaches,
                quaint whitewashed villages — and stray cats giving birth three times a year on the streets.
                Dogs chained for life. Newborn puppies thrown away.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We had to change this. So we created Sifnos for Animals — a formal Association for the Care
                and Protection of every animal on the island.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Read our story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/hero_image.jpg"
                  alt="Animals of Sifnos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-xl px-5 py-3 shadow-lg">
                <p className="text-sm font-bold">10+ years</p>
                <p className="text-xs text-blue-100">protecting Sifnos animals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 bg-deep">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            {translations.homepage.callToAction.title}
          </h2>
          <p className="mt-6 text-blue-200 text-lg max-w-xl mx-auto">
            {translations.homepage.callToAction.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Donate Monthly
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              One-Time Gift
            </Link>
          </div>
          <p className="mt-6 text-blue-400 text-sm">
            Secure payment via PayPal · Patreon · Bank Transfer
          </p>
        </div>
      </section>
    </main>
  );
}

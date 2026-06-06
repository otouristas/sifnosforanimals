'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

const animals = [
  {
    id: 'luna',
    name: 'Luna',
    type: 'Dog',
    breed: 'Mixed Breed',
    age: '2 years',
    gender: 'Female',
    size: 'Medium',
    image: '/animals/luna.jpg',
    description: 'Luna is a friendly and energetic dog who loves to play and go for walks.',
    status: 'Available',
    waiting: '3 weeks',
  },
  {
    id: 'oliver',
    name: 'Oliver',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    age: '1 year',
    gender: 'Male',
    size: 'Small',
    image: '/animals/oliver.jpg',
    description: 'Oliver is a sweet and gentle cat who loves to cuddle and play with toys.',
    status: 'Available',
    waiting: '5 weeks',
  },
  {
    id: 'max',
    name: 'Max',
    type: 'Dog',
    breed: 'Labrador Mix',
    age: '3 years',
    gender: 'Male',
    size: 'Large',
    image: '/animals/max.jpg',
    description: 'Max is a calm and loyal dog who gets along with everyone.',
    status: 'Available',
    waiting: '8 weeks',
  },
];

const adoptionSteps = [
  {
    step: 1,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: 2,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: 3,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    step: 4,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const statusColors: Record<string, string> = {
  Available: 'bg-green-100 text-green-700 border-green-200',
  'In Foster': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Adopted: 'bg-gray-100 text-gray-500 border-gray-200',
};

export default function AnimalsPage() {
  const { translations } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All Pets');
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const categories = [
    { name: translations.animals.categories.allPets, key: 'All Pets', count: 24 },
    { name: translations.animals.categories.dogs, key: 'Dog', count: 12 },
    { name: translations.animals.categories.cats, key: 'Cat', count: 8 },
    { name: translations.animals.categories.smallPets, key: 'Small Pet', count: 4 },
  ];

  const filters = [
    {
      name: translations.animals.filters.age.label,
      options: [
        translations.animals.filters.age.baby,
        translations.animals.filters.age.young,
        translations.animals.filters.age.adult,
        translations.animals.filters.age.senior,
      ],
    },
    {
      name: translations.animals.filters.size.label,
      options: [
        translations.animals.filters.size.small,
        translations.animals.filters.size.medium,
        translations.animals.filters.size.large,
      ],
    },
    {
      name: translations.animals.filters.gender.label,
      options: [
        translations.animals.filters.gender.male,
        translations.animals.filters.gender.female,
      ],
    },
  ];

  const filteredAnimals = animals.filter((animal) => {
    if (selectedCategory !== 'All Pets' && animal.type !== selectedCategory) return false;
    for (const [filterName, selectedOptions] of Object.entries(activeFilters)) {
      if (!selectedOptions.length) continue;
      if (filterName === translations.animals.filters.size.label && !selectedOptions.includes(animal.size)) return false;
      if (filterName === translations.animals.filters.gender.label && !selectedOptions.includes(animal.gender)) return false;
    }
    return true;
  });

  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ── */}
      <section className="relative h-72 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero_image.jpg"
            alt="Find your perfect companion on Sifnos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Sifnos, Greece</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            {translations.animals.hero.title}
            <br />{translations.animals.hero.titleBreak}
          </h1>
        </div>
      </section>

      {/* ── Category Pills ── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat.key ? 'bg-white/20 text-white' : 'bg-white text-gray-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <div className="sticky top-36 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-deep text-sm uppercase tracking-wide mb-5">
                {translations.animals.filters.title}
              </h2>
              <div className="space-y-6">
                {filters.map((filter) => (
                  <div key={filter.name}>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {filter.name}
                    </h3>
                    <div className="space-y-2">
                      {filter.options.map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                            onChange={(e) => {
                              setActiveFilters((prev) => ({
                                ...prev,
                                [filter.name]: e.target.checked
                                  ? [...(prev[filter.name] || []), option]
                                  : (prev[filter.name] || []).filter((i) => i !== option),
                              }));
                            }}
                          />
                          <span className="text-sm text-gray-600 group-hover:text-deep transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Animals Grid */}
          <div className="flex-1">
            {filteredAnimals.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-xl">No animals match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('All Pets'); setActiveFilters({}); }}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAnimals.map((animal) => (
                  <Link key={animal.id} href={`/animals/${animal.id}`} className="group">
                    <article className="bg-white rounded-2xl overflow-hidden shadow-sm card-lift border border-gray-100 h-full">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={animal.image}
                          alt={`${animal.name} — ${animal.breed} for adoption in Sifnos`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusColors[animal.status] || statusColors['Available']}`}>
                            {animal.status}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="bg-black/30 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                            {animal.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-xl font-black text-deep">{animal.name}</h3>
                          <span className="text-sm text-gray-400">{animal.age}</span>
                        </div>
                        <p className="text-gray-500 text-sm">{animal.breed}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{animal.gender}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{animal.size}</span>
                        </div>
                        <p className="text-orange-400 text-xs font-medium mt-3">
                          ⏱ Waiting {animal.waiting}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Adoption Process ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Simple & Transparent</p>
            <h2 className="text-4xl font-black text-deep">{translations.animals.adoptionProcess.title}</h2>
            <div className="mx-auto mt-4 w-16 h-1 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {translations.animals.adoptionProcess.steps.map((step: { title: string; description: string }, index: number) => (
              <div key={index} className="relative bg-cream rounded-2xl p-6 text-center border border-gray-100">
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 text-gray-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                )}
                <div className="mx-auto w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                  {adoptionSteps[index]?.icon}
                </div>
                <div className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-black mx-auto mb-3">
                  {index + 1}
                </div>
                <h3 className="font-bold text-deep">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-deep">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white">
            Ready to Give a Pet a Forever Home?
          </h2>
          <p className="mt-4 text-blue-200 text-lg">
            Start your adoption journey today and make a difference in an animal&apos;s life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
            >
              {translations.animals.cta.adopt}
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              {translations.navigation.donate}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

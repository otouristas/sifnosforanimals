'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaw, 
  faDog, 
  faCat, 
  faFish,
  faMagnifyingGlass,
  faFileLines,
  faHandshake,
  faHouseChimney
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/components/LanguageProvider';

// Sample data - replace with actual data from your backend
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
  },
  // Add more animals here
];

export default function AnimalsPage() {
  const { translations } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(translations.animals.categories.allPets);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const categories = [
    {
      name: translations.animals.categories.allPets,
      icon: <FontAwesomeIcon icon={faPaw} className="w-12 h-12" />,
      count: 24
    },
    {
      name: translations.animals.categories.dogs,
      icon: <FontAwesomeIcon icon={faDog} className="w-12 h-12" />,
      count: 12
    },
    {
      name: translations.animals.categories.cats,
      icon: <FontAwesomeIcon icon={faCat} className="w-12 h-12" />,
      count: 8
    },
    {
      name: translations.animals.categories.smallPets,
      icon: <FontAwesomeIcon icon={faFish} className="w-12 h-12" />,
      count: 4
    }
  ];

  const filters = [
    { 
      name: translations.animals.filters.age.label, 
      options: [
        translations.animals.filters.age.baby,
        translations.animals.filters.age.young,
        translations.animals.filters.age.adult,
        translations.animals.filters.age.senior
      ]
    },
    { 
      name: translations.animals.filters.size.label, 
      options: [
        translations.animals.filters.size.small,
        translations.animals.filters.size.medium,
        translations.animals.filters.size.large
      ]
    },
    { 
      name: translations.animals.filters.gender.label, 
      options: [
        translations.animals.filters.gender.male,
        translations.animals.filters.gender.female
      ]
    },
  ];

  const filteredAnimals = animals.filter(animal => {
    // Filter by category
    if (selectedCategory !== translations.animals.categories.allPets) {
      if (selectedCategory === translations.animals.categories.smallPets) {
        if (animal.type !== 'Small Pet') return false;
      } else if (animal.type !== selectedCategory.slice(0, -1)) { // Remove 's' from 'Dogs' or 'Cats'
        return false;
      }
    }

    // Filter by active filters
    for (const [filterName, selectedOptions] of Object.entries(activeFilters)) {
      if (selectedOptions.length === 0) continue;

      switch (filterName) {
        case translations.animals.filters.age.label:
          const ageMap: Record<string, boolean> = {
            [translations.animals.filters.age.baby]: parseInt(animal.age) <= 1,
            [translations.animals.filters.age.young]: parseInt(animal.age) > 1 && parseInt(animal.age) <= 3,
            [translations.animals.filters.age.adult]: parseInt(animal.age) > 3 && parseInt(animal.age) <= 8,
            [translations.animals.filters.age.senior]: parseInt(animal.age) > 8
          };
          if (!selectedOptions.some(option => ageMap[option])) return false;
          break;
        case translations.animals.filters.size.label:
          if (!selectedOptions.includes(animal.size)) return false;
          break;
        case translations.animals.filters.gender.label:
          if (!selectedOptions.includes(animal.gender)) return false;
          break;
      }
    }

    return true;
  });

  const adoptionSteps = [
    {
      title: translations.animals.adoptionProcess.steps[0].title,
      description: translations.animals.adoptionProcess.steps[0].description,
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="w-12 h-12 text-red-500" />,
    },
    {
      title: translations.animals.adoptionProcess.steps[1].title,
      description: translations.animals.adoptionProcess.steps[1].description,
      icon: <FontAwesomeIcon icon={faFileLines} className="w-12 h-12 text-red-500" />,
    },
    {
      title: translations.animals.adoptionProcess.steps[2].title,
      description: translations.animals.adoptionProcess.steps[2].description,
      icon: <FontAwesomeIcon icon={faHandshake} className="w-12 h-12 text-red-500" />,
    },
    {
      title: translations.animals.adoptionProcess.steps[3].title,
      description: translations.animals.adoptionProcess.steps[3].description,
      icon: <FontAwesomeIcon icon={faHouseChimney} className="w-12 h-12 text-red-500" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0">
          <Image
            src="/hero_image.jpg"
            alt="Pet Adoption"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {translations.animals.hero.title}<br />{translations.animals.hero.titleBreak}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
            {translations.animals.hero.subtitle}
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-4 -mt-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex flex-col items-center rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                selectedCategory === category.name
                  ? 'ring-2 ring-red-500'
                  : ''
              }`}
            >
              <div className="text-gray-600 mb-3 hover:text-red-500 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {category.count} {translations.animals.categories.available}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{translations.animals.filters.title}</h2>
              <div className="space-y-6">
                {filters.map((filter) => (
                  <div key={filter.name}>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">
                      {filter.name}
                    </h3>
                    <div className="space-y-2">
                      {filter.options.map((option) => (
                        <label
                          key={option}
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                            onChange={(e) => {
                              setActiveFilters((prev) => ({
                                ...prev,
                                [filter.name]: e.target.checked
                                  ? [...(prev[filter.name] || []), option]
                                  : (prev[filter.name] || []).filter(
                                      (item) => item !== option
                                    ),
                              }));
                            }}
                          />
                          <span className="ml-2 text-sm text-gray-600">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Animals Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAnimals.map((animal) => (
                <Link
                  key={animal.id}
                  href={`/animals/${animal.id}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={animal.image}
                        alt={animal.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                          {translations.animals.status[animal.status.toLowerCase() as keyof typeof translations.animals.status]}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {animal.name}
                        </h3>
                        <p className="text-sm text-gray-500">{animal.age}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {animal.breed}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">
                          {animal.gender}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">
                          {animal.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Adoption Process Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            {translations.animals.adoptionProcess.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {adoptionSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 text-red-500 hover:text-red-600 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {translations.animals.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
            {translations.animals.cta.subtitle}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-white px-8 py-3 text-base font-medium text-red-600 hover:bg-red-50"
            >
              {translations.animals.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

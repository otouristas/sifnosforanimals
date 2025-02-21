'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

interface AnimalDetails {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'other';
  breed: string;
  age: number;
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  description: string;
  imageUrl: string;
  status: 'available' | 'pending' | 'adopted';
  donationPackage: 'injured' | 'senior' | 'cat-food' | 'dog-food';
}

// Mock data - replace with actual data fetching
const animals: Record<string, AnimalDetails> = {
  luna: {
    id: 'luna',
    name: 'Luna',
    species: 'dog',
    breed: 'mixed',
    age: 2,
    gender: 'female',
    size: 'medium',
    description: 'Luna is a sweet and energetic dog who loves to play and cuddle.',
    imageUrl: '/animals/luna.jpg',
    status: 'available',
    donationPackage: 'injured'
  }
};

export default function AnimalPage({ params }: { params: { id: string } }) {
  const { translations } = useLanguage();
  const resolvedParams = use(params);

  const formatAge = (age: number) => {
    const ageTranslations: { singular: string; plural: string; } = translations.animal.characteristics.age;
    if (age === 1) {
      return `1 ${ageTranslations.singular}`;
    }
    return `${age} ${ageTranslations.plural}`;
  };

  const resolvedAnimal = animals[resolvedParams.id] || animals.luna;

  if (!resolvedAnimal) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {translations.animal.notFound}
            </h2>
            <div className="mt-6">
              <Link
                href="/animals"
                className="inline-flex items-center text-primary hover:text-primary-dark"
              >
                <FaArrowLeft className="mr-2" />
                {translations.animal.backToAnimals}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/animals"
            className="inline-flex items-center text-primary hover:text-primary-dark"
          >
            <FaArrowLeft className="mr-2" />
            {translations.animal.backToAnimals}
          </Link>
        </div>

        {/* Animal Details Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 md:h-full">
              <Image
                src={resolvedAnimal.imageUrl}
                alt={resolvedAnimal.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start">
                <h1 className="text-4xl font-bold text-gray-900">{resolvedAnimal.name}</h1>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    resolvedAnimal.status === 'available'
                      ? 'bg-green-100 text-green-800'
                      : resolvedAnimal.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {translations.animals.status[resolvedAnimal.status]}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    {translations.animal.breed}
                  </h3>
                  <p className="mt-1 text-lg text-gray-900">{resolvedAnimal.breed}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    {translations.animal.characteristics.age}
                  </h3>
                  <p className="mt-1 text-lg text-gray-900">
                    {formatAge(resolvedAnimal.age)}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    {translations.animal.characteristics.gender}
                  </h3>
                  <p className="mt-1 text-lg text-gray-900">
                    {translations.animals.filters.gender[resolvedAnimal.gender]}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    {translations.animals.characteristics.size}
                  </h3>
                  <p className="mt-1 text-lg text-gray-900">
                    {translations.animals.filters.size[resolvedAnimal.size]}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">
                  {translations.animal.about}
                </h2>
                <p className="mt-4 text-gray-600">{resolvedAnimal.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {translations.animals.cta.donate}
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              {translations.about.paradise.reality[0]}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
            >
              {translations.navigation.donate}
            </Link>
          </div>
        </div>

        {/* Contact Form Section */}
        {resolvedAnimal.status === 'available' && (
          <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {translations.animals.adoptionProcess.title}
            </h2>
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600">
                {translations.animals.adoptionProcess.steps[0].description}
              </p>
            </div>
            <ContactForm animalName={resolvedAnimal.name} />
          </div>
        )}
      </div>
    </div>
  );
}

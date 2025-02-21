'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandHoldingHeart,
  faStethoscope,
  faPaw,
  faHandsHoldingChild
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/components/LanguageProvider';

export default function HomePage() {
  const { translations } = useLanguage();

  const services = [
    {
      title: translations.homepage.services.animalRescue.title,
      description: translations.homepage.services.animalRescue.description,
      icon: <FontAwesomeIcon icon={faHandHoldingHeart} className="w-12 h-12 text-red-500" />,
    },
    {
      title: translations.homepage.services.medicalCare.title,
      description: translations.homepage.services.medicalCare.description,
      icon: <FontAwesomeIcon icon={faStethoscope} className="w-12 h-12 text-blue-500" />,
    },
    {
      title: translations.homepage.services.petAdoption.title,
      description: translations.homepage.services.petAdoption.description,
      icon: <FontAwesomeIcon icon={faPaw} className="w-12 h-12 text-green-500" />,
    },
    {
      title: translations.homepage.services.petSupport.title,
      description: translations.homepage.services.petSupport.description,
      icon: <FontAwesomeIcon icon={faHandsHoldingChild} className="w-12 h-12 text-purple-500" />,
    },
  ];

  const statistics = [
    { number: '500+', label: translations.homepage.statistics.petsHelped },
    { number: '300+', label: translations.homepage.statistics.adoptions },
    { number: '50+', label: translations.homepage.statistics.volunteers },
    { number: '10+', label: translations.homepage.statistics.yearsOfService },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_image.jpg"
            alt="Hero background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {translations.homepage.hero.title} <br />
            {translations.homepage.hero.titleBreak}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {translations.homepage.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/animals"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              {translations.homepage.hero.cta}
            </Link>
            <Link
              href="/donate"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              {translations.navigation.donate}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{translations.homepage.services.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translations.homepage.services.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{translations.homepage.featuredPets.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translations.homepage.featuredPets.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured pet cards would go here */}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/animals"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              {translations.homepage.featuredPets.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{translations.homepage.callToAction.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {translations.homepage.callToAction.subtitle}
          </p>
          <Link
            href="/donate"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            {translations.navigation.donate}
          </Link>
        </div>
      </section>
    </main>
  );
}

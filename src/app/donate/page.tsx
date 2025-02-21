'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCat,
  faHandHoldingMedical,
  faSyringe,
  faBabyCarriage,
  faShieldHeart,
  faCrown,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import { 
  faPaypal,
  faPatreon 
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const donationPackages = [
  {
    id: 'catFood',
    icon: faCat,
    amount: 8
  },
  {
    id: 'injured',
    icon: faHandHoldingMedical,
    amount: 15
  },
  {
    id: 'neuter',
    icon: faSyringe,
    amount: 20
  },
  {
    id: 'abandoned',
    icon: faBabyCarriage,
    amount: 30
  },
  {
    id: 'abused',
    icon: faShieldHeart,
    amount: 40
  },
  {
    id: 'all',
    icon: faCrown,
    amount: 100
  }
];

export default function DonatePage() {
  const { translations } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-[#e9ecec]">
      {/* Hero Section */}
      <div className="relative bg-[#06a9ec] text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero_image.jpg"
            alt="Support our animals"
            fill
            className="object-cover opacity-40"
            priority
            quality={100}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {translations.donate.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-[#adaeae]">
              {translations.donate.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Donation Packages */}
      <div className="py-16 bg-[#e9ecec]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7d7d7d]">{translations.donate.packages.title}</h2>
            <p className="mt-4 text-lg text-[#adaeae]">{translations.donate.packages.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {donationPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="group flex flex-col rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#06a9ec] to-[#6bccf3] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <FontAwesomeIcon icon={pkg.icon} className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                        <span className="text-3xl font-bold">&euro;{pkg.amount}</span>
                        <span className="text-sm opacity-90 block">{translations.donate.packages.perMonth}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-4">
                    {translations.donate.packages.items[pkg.id].title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Impact Box */}
                  <div className="bg-[#cee4a6] border border-[#a7cf63] p-4 rounded-lg mb-6">
                    <p className="text-sm font-medium text-[#87aa46]">
                      {translations.donate.packages.items[pkg.id].impact}
                    </p>
                  </div>

                  {/* Description with Show More/Less */}
                  <div className="mb-6 flex-grow">
                    <p className={`text-[#7d7d7d] ${!expandedCards[pkg.id] ? 'line-clamp-3' : ''}`}>
                      {translations.donate.packages.items[pkg.id].description}
                    </p>
                    {translations.donate.packages.items[pkg.id].description.length > 150 && (
                      <button
                        onClick={() => toggleCard(pkg.id)}
                        className="mt-2 text-[#06a9ec] hover:text-[#6bccf3] text-sm font-medium flex items-center gap-1"
                      >
                        {expandedCards[pkg.id] ? (
                          <>{translations.donate.packages.showLess} <FontAwesomeIcon icon={faChevronUp} className="h-3 w-3" /></>
                        ) : (
                          <>{translations.donate.packages.showMore} <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" /></>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Payment Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a
                      href="https://www.paypal.com/donate?hosted_button_id=H36V96CL4LPLW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-[#82bb1a] px-4 py-3 text-white hover:bg-[#a7cf63] transition-all group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      <FontAwesomeIcon icon={faPaypal} className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">PayPal</span>
                    </a>
                    <a
                      href="https://www.patreon.com/sifnosforanimals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-[#82bb1a] px-4 py-3 text-white hover:bg-[#a7cf63] transition-all group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      <FontAwesomeIcon icon={faPatreon} className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Patreon</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Payment Options */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#7d7d7d] mb-4">{translations.donate.other.title}</h2>
          <p className="text-center text-[#adaeae] mb-12">{translations.donate.other.subtitle}</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* PayPal */}
            <div className="rounded-xl bg-[#e9ecec] p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#06a9ec] bg-opacity-10 p-3 rounded-lg w-fit">
                <FontAwesomeIcon icon={faPaypal} className="h-8 w-8 text-[#06a9ec]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#7d7d7d]">{translations.donate.other.paypal.title}</h3>
              <p className="mt-2 text-sm text-[#adaeae]">{translations.donate.other.paypal.description}</p>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=H36V96CL4LPLW"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-[#06a9ec] hover:text-[#6bccf3] group"
              >
                <span>{translations.donate.other.paypal.button}</span>
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Patreon */}
            <div className="rounded-xl bg-[#e9ecec] p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#82bb1a] bg-opacity-10 p-3 rounded-lg w-fit">
                <FontAwesomeIcon icon={faPatreon} className="h-8 w-8 text-[#82bb1a]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#7d7d7d]">{translations.donate.other.patreon.title}</h3>
              <p className="mt-2 text-sm text-[#adaeae]">{translations.donate.other.patreon.description}</p>
              <a
                href="https://www.patreon.com/sifnosforanimals"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-[#82bb1a] hover:text-[#a7cf63] group"
              >
                <span>{translations.donate.other.patreon.button}</span>
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Bank Transfer */}
            <div className="rounded-xl bg-[#e9ecec] p-6 hover:shadow-lg transition-shadow">
              <div className="bg-[#06a9ec] bg-opacity-10 p-3 rounded-lg w-fit">
                <svg className="h-8 w-8 text-[#06a9ec]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#7d7d7d]">{translations.donate.other.bank.title}</h3>
              <p className="mt-2 text-sm text-[#adaeae]">{translations.donate.other.bank.description}</p>
              <div className="mt-4 space-y-2 text-sm">
                <div className="bg-white rounded-lg p-4 border border-[#e9ecec]">
                  <p className="font-semibold text-[#7d7d7d]">{translations.donate.other.bank.account}</p>
                  <p className="font-mono text-[#06a9ec] mt-1">{translations.donate.other.bank.iban}</p>
                  <p className="text-[#adaeae] mt-2">{translations.donate.other.bank.beneficiary}</p>
                  <p className="text-[#adaeae] mt-1">{translations.donate.other.bank.swift}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

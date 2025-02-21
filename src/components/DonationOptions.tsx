'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCat,
  faDog,
  faHeart,
  faHandHoldingHeart,
  faHandHoldingMedical
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/components/LanguageProvider';

interface DonationPackage {
  id: string;
  title: string;
  amount: number;
  description: string;
  impact: string;
}

interface DonationOptionsProps {
  selectedPackage?: string;
  compact?: boolean;
}

export default function DonationOptions({ selectedPackage, compact = false }: DonationOptionsProps) {
  const { translations } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const donationPackages: DonationPackage[] = [
    {
      id: 'cat-food',
      title: translations.donate.packages.items.catFood.title,
      amount: 8,
      description: translations.donate.packages.items.catFood.description,
      impact: translations.donate.packages.items.catFood.impact
    },
    {
      id: 'dog-food',
      title: translations.donate.packages.items.dogFood.title,
      amount: 15,
      description: translations.donate.packages.items.dogFood.description,
      impact: translations.donate.packages.items.dogFood.impact
    },
    {
      id: 'injured',
      title: translations.donate.packages.items.injured.title,
      amount: 25,
      description: translations.donate.packages.items.injured.description,
      impact: translations.donate.packages.items.injured.impact
    },
    {
      id: 'senior',
      title: translations.donate.packages.items.senior.title,
      amount: 40,
      description: translations.donate.packages.items.senior.description,
      impact: translations.donate.packages.items.senior.impact
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'cat-food':
        return faCat;
      case 'dog-food':
        return faDog;
      case 'injured':
        return faHandHoldingMedical;
      case 'senior':
        return faHandHoldingHeart;
      default:
        return faHeart;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {donationPackages.map((pkg) => (
        <div
          key={pkg.id}
          className={`bg-white rounded-lg shadow-md overflow-hidden ${
            selectedPackage === pkg.id ? 'ring-2 ring-primary' : ''
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
              <FontAwesomeIcon icon={getIcon(pkg.id)} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">{pkg.title}</h3>
            <div className="text-2xl font-bold text-center text-primary mb-4">
              €{pkg.amount}
              <span className="text-sm font-normal text-gray-600">
                /{translations.donate.packages.perMonth}
              </span>
            </div>
            {!compact && (
              <>
                <p className={`text-gray-600 text-sm ${expandedCards[pkg.id] ? '' : 'line-clamp-3'}`}>
                  {pkg.description}
                </p>
                {pkg.description.length > 150 && (
                  <button
                    onClick={() => toggleCard(pkg.id)}
                    className="text-primary text-sm mt-2 hover:underline"
                  >
                    {expandedCards[pkg.id] ? 'Show Less' : translations.donate.packages.showMore}
                  </button>
                )}
                <p className="text-sm font-medium text-primary mt-4">{pkg.impact}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

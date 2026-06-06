'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCat,
  faHandHoldingMedical,
  faSyringe,
  faBabyCarriage,
  faShieldHeart,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faPaypal,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons';

const donationPackages = [
  { id: 'catFood',   icon: faCat,              amount: 8,   featured: false },
  { id: 'injured',   icon: faHandHoldingMedical, amount: 15, featured: false },
  { id: 'neuter',    icon: faSyringe,           amount: 20,  featured: false },
  { id: 'abandoned', icon: faBabyCarriage,      amount: 30,  featured: true  },
  { id: 'abused',    icon: faShieldHeart,       amount: 40,  featured: false },
  { id: 'all',       icon: faCrown,             amount: 100, featured: false },
];

export default function DonatePage() {
  const { translations } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('GR4301727130005713102264392');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* ── Hero ── */}
      <section className="py-20 px-4 bg-deep text-white text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Make a Difference</p>
        <h1 className="text-5xl md:text-6xl font-black leading-tight">
          {translations.donate.hero.title}
        </h1>
        <p className="mt-6 text-blue-200 text-xl max-w-xl mx-auto">
          {translations.donate.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-300">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% goes to the animals
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Registered nonprofit
          </span>
        </div>
      </section>

      {/* ── Donation Packages ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-deep">{translations.donate.packages.title}</h2>
            <p className="mt-3 text-gray-500 text-lg">{translations.donate.packages.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationPackages.map((pkg) => {
              const items = translations.donate.packages.items as Record<string, { title: string; impact: string; description: string }>;
              const t = items[pkg.id];
              return (
                <div
                  key={pkg.id}
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-sm card-lift border-2 transition-all ${
                    pkg.featured ? 'border-primary shadow-md' : 'border-gray-100'
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute top-0 inset-x-0 bg-primary text-white text-xs font-bold text-center py-1.5 uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 ${pkg.featured ? 'pt-10' : ''}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <FontAwesomeIcon icon={pkg.icon} className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-black text-deep">€{pkg.amount}</span>
                        <span className="text-gray-400 text-sm block">/ month</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-deep mb-2">{t.title}</h3>

                    {/* Impact */}
                    <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-4">
                      <p className="text-green-700 text-sm font-medium">{t.impact}</p>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.description}</p>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="https://www.paypal.com/donate?hosted_button_id=H36V96CL4LPLW"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#003087] hover:bg-[#001f5c] text-white rounded-xl px-3 py-3 text-sm font-semibold transition-all"
                      >
                        <FontAwesomeIcon icon={faPaypal} className="w-4 h-4" />
                        PayPal
                      </a>
                      <a
                        href="https://www.patreon.com/sifnosforanimals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#ff424d] hover:bg-[#e03b45] text-white rounded-xl px-3 py-3 text-sm font-semibold transition-all"
                      >
                        <FontAwesomeIcon icon={faPatreon} className="w-4 h-4" />
                        Patreon
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Other Payment Methods ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-deep">{translations.donate.other.title}</h2>
            <p className="mt-3 text-gray-500">{translations.donate.other.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PayPal */}
            <a
              href="https://www.paypal.com/donate?hosted_button_id=H36V96CL4LPLW"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream rounded-2xl p-7 border border-gray-100 card-lift block"
            >
              <div className="w-12 h-12 bg-[#009cde]/10 rounded-xl flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faPaypal} className="w-6 h-6 text-[#003087]" />
              </div>
              <h3 className="font-bold text-deep mb-2">{translations.donate.other.paypal.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{translations.donate.other.paypal.description}</p>
              <span className="text-primary font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                {translations.donate.other.paypal.button}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            {/* Patreon */}
            <a
              href="https://www.patreon.com/sifnosforanimals"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream rounded-2xl p-7 border border-gray-100 card-lift block"
            >
              <div className="w-12 h-12 bg-[#ff424d]/10 rounded-xl flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faPatreon} className="w-6 h-6 text-[#ff424d]" />
              </div>
              <h3 className="font-bold text-deep mb-2">{translations.donate.other.patreon.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{translations.donate.other.patreon.description}</p>
              <span className="text-primary font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                {translations.donate.other.patreon.button}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            {/* Bank Transfer */}
            <div className="bg-cream rounded-2xl p-7 border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18l2.25 2.25m0 0l3-3m-3 3L6 7.5M2.25 3h19.5M3 21h18M12 3v18m4.5-9H7.5" />
                </svg>
              </div>
              <h3 className="font-bold text-deep mb-2">{translations.donate.other.bank.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{translations.donate.other.bank.description}</p>
              <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-2">
                <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">{translations.donate.other.bank.account}</p>
                <div className="flex items-center gap-2">
                  <code className="text-primary text-xs font-mono flex-1 break-all">
                    {translations.donate.other.bank.iban}
                  </code>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 text-gray-400 hover:text-primary transition-colors"
                    title="Copy IBAN"
                    aria-label="Copy IBAN"
                  >
                    {copied ? (
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-gray-400 text-xs">{translations.donate.other.bank.beneficiary}</p>
                <p className="text-gray-400 text-xs">{translations.donate.other.bank.swift}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/components/LanguageProvider';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#e9ecec] shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logofinal.jpg"
                alt="Sifnos for Animals"
                width={180}
                height={60}
                className="mix-blend-multiply"
                priority
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? translations.navigation.closeMenu : translations.navigation.menu}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/animals"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              {translations.navigation.animals}
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              {translations.navigation.about}
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              {translations.navigation.contact}
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#06a9ec] px-4 py-2 text-base font-medium text-white hover:bg-[#0598d4]"
            >
              {translations.navigation.donate}
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                href="/animals"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.navigation.animals}
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.navigation.about}
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.navigation.contact}
              </Link>
              <Link
                href="/donate"
                className="block rounded-md px-3 py-2 text-base font-medium text-white bg-[#06a9ec] hover:bg-[#0598d4]"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.navigation.donate}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

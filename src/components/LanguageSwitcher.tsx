'use client';

import { useLanguage } from '@/components/LanguageProvider';

interface LanguageSwitcherProps {
  translations?: {
    en: string;
    el: string;
  };
}

export default function LanguageSwitcher({ translations = { en: 'EN', el: 'ΕΛ' } }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 rounded ${
          language === 'en' ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
        }`}
      >
        {translations.en}
      </button>
      <button
        onClick={() => handleLanguageChange('el')}
        className={`px-2 py-1 rounded ${
          language === 'el' ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
        }`}
      >
        {translations.el}
      </button>
    </div>
  );
}

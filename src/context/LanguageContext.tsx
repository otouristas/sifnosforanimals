'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/translations/en';
import el from '@/translations/el';
import { Translations } from '@/types/translations';

type Language = 'en' | 'el';

type LanguageContextType = {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
};

const translations = {
  en,
  el,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('el');
  const [t, setTranslations] = useState<Translations>(el);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language || 'el';
    setLanguage(savedLanguage);
    setTranslations(savedLanguage === 'el' ? el : en);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setTranslations(lang === 'el' ? el : en);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

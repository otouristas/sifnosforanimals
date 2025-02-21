'use client';

import React, { createContext, useContext, useState } from 'react';
import { Translations } from '@/types/translations';
import en from '@/translations/en';

type LanguageContextType = {
  translations: Translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [translations] = useState<Translations>(en);

  return (
    <LanguageContext.Provider value={{ translations }}>
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

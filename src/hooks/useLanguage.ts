'use client';

import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
    setIsInitialized(true);
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Don't render children until language is loaded from localStorage
  if (!isInitialized) {
    return React.createElement('div', null, 'Loading...');
  }

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, changeLanguage } },
    children
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 
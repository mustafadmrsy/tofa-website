'use client';

import { useLanguage, Language } from './useLanguage';
import { translations } from '../translations';

export const useTranslations = () => {
  const { language, changeLanguage } = useLanguage();
  
  const t = translations[language];
  
  return { t, language, changeLanguage };
}; 
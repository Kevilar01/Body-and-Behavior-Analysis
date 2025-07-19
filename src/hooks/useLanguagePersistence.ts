
import { useState, useEffect } from 'react';
import { Language } from '@/types/language';

const LANGUAGE_STORAGE_KEY = 'preferred-language';

export const useLanguagePersistence = () => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return (savedLanguage as Language) || 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Silent fail if localStorage is not available
    }
  }, [language]);

  return { language, setLanguage };
};

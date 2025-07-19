
import { useState, useEffect } from 'react';
import { Language } from '@/types/language';
import { getInitialLanguage, STORAGE_KEY, DEFAULT_LANGUAGE } from './languageConfig';

export const useLanguagePersistence = () => {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language after component mounts (browser is ready)
  useEffect(() => {
    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
    setIsInitialized(true);
  }, []);

  // Persist language changes to localStorage
  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Silent fail if localStorage is not available
    }
  }, [language, isInitialized]);

  return { language, setLanguage, isInitialized };
};

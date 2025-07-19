
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { Language, LanguageContextType } from '@/types/language';
import { useLanguagePersistence } from './useLanguagePersistence';
import { loadTranslations, createTranslationFunction } from './translationUtils';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { language, setLanguage, isInitialized } = useLanguagePersistence();
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes and after initialization
  useEffect(() => {
    if (!isInitialized) return;

    const loadLanguageTranslations = async () => {
      setIsLoading(true);
      try {
        const translationData = await loadTranslations(language);
        setTranslations(translationData);
      } catch (error) {
        console.error('Failed to load translations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguageTranslations();
  }, [language, isInitialized]);

  // Create translation function
  const t = createTranslationFunction(language, translations);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isLoading: !isInitialized || isLoading
  };

  // Return null during initialization to prevent hydration mismatches
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook to use the language context
 * @throws {Error} When used outside of LanguageProvider
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};

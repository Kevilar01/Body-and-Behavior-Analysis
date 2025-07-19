
import { Language } from '@/types/language';

type TranslationData = Record<string, any>;

// Cache for loaded translations
const translationCache = new Map<Language, TranslationData>();

/**
 * Dynamically loads translation file for a given language
 */
export const loadTranslations = async (language: Language): Promise<TranslationData> => {
  if (translationCache.has(language)) {
    return translationCache.get(language)!;
  }

  try {
    const translations = await import(`./translations/${language}.json`);
    const data = translations.default;
    translationCache.set(language, data);
    return data;
  } catch (error) {
    console.warn(`Failed to load translations for language: ${language}`, error);
    // Fallback to English if available
    if (language !== 'en' && !translationCache.has('en')) {
      return loadTranslations('en');
    }
    return {};
  }
};

/**
 * Gets a nested value from an object using dot notation
 */
export const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
};

/**
 * Creates a translation function for a given language and translations
 */
export const createTranslationFunction = (language: Language, translations: TranslationData) => {
  return (key: string, fallback?: string): string => {
    const value = getNestedValue(translations, key);
    
    if (value !== undefined) {
      return value;
    }
    
    // Log missing translation key in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
    }
    
    return fallback || key;
  };
};

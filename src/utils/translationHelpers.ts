
import { translations } from '@/translations';
import { Language, TranslationKey } from '@/types/language';

export const getTranslation = (key: TranslationKey, language: Language): string => {
  const translation = translations[key];
  
  if (!translation) {
    console.warn(`Translation key "${key}" not found`);
    return key;
  }
  
  return translation[language] || translation.en || key;
};

export const createTranslationFunction = (language: Language) => {
  return (key: TranslationKey): string => getTranslation(key, language);
};

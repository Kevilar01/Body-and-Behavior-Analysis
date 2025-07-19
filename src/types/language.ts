
export type Language = 'en' | 'pt';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  isLoading?: boolean;
}

export interface TranslationItem {
  en: string;
  pt: string;
}

export type TranslationKey = string;
export type TranslationMap = Record<TranslationKey, TranslationItem>;


import { Language } from '@/types/language';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'pt'];

export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  pt: 'Português'
};

export const LANGUAGE_FLAGS: Record<Language, string> = {
  en: 'us',
  pt: 'br'
};

export const STORAGE_KEY = 'preferred-language';

export const getInitialLanguage = (): Language => {
  // Return default if we're in SSR or browser not ready
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language;
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch {
    // Silent fail if localStorage is not available
  }
  
  try {
    // Fallback to browser language if supported
    const browserLang = navigator.language.split('-')[0] as Language;
    return SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
  } catch {
    // Silent fail if navigator is not available
  }

  return DEFAULT_LANGUAGE;
};

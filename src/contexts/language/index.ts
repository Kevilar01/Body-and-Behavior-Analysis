
/**
 * Language Context Module
 * 
 * Provides a modular, type-safe translation system for the application.
 * 
 * @example
 * ```tsx
 * import { LanguageProvider, useLanguage } from '@/contexts/language';
 * 
 * // In your app root:
 * <LanguageProvider>
 *   <App />
 * </LanguageProvider>
 * 
 * // In your components:
 * const { language, setLanguage, t } = useLanguage();
 * ```
 */

export { LanguageProvider, useLanguage } from './LanguageProvider';
export { useLanguagePersistence } from './useLanguagePersistence';
export * from './languageConfig';
export * from './translationUtils';

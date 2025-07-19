
/**
 * Legacy Language Context
 * 
 * This file now exports from the modular language system for backward compatibility.
 * All new code should import directly from '@/contexts/language'
 * 
 * @deprecated Use '@/contexts/language' instead
 */

export { LanguageProvider, useLanguage } from './language';
export type { Language, LanguageContextType } from '@/types/language';

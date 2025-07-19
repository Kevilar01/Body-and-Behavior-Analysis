
import { TranslationMap } from '@/types/language';
import { navigationTranslations } from './navigation';
import { pageTranslations } from './pages';
import { homeTranslations } from './home';
import { consultationTranslations } from './consultation';
import { manifestTranslations } from './manifest';
import { commonTranslations } from './common';

export const translations: TranslationMap = {
  ...navigationTranslations,
  ...pageTranslations,
  ...homeTranslations,
  ...consultationTranslations,
  ...manifestTranslations,
  ...commonTranslations
};

export * from './navigation';
export * from './pages';
export * from './home';
export * from './consultation';
export * from './manifest';
export * from './common';

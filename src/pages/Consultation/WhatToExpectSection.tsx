
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatToExpectSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-neutral-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in animation-delay-300">
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-8 sm:mb-12">
            {t('consultation.what_to_expect.title')}
          </h2>
          <div className="text-neutral-taupe leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p className="mb-8 text-base sm:text-lg">
              {t('consultation.what_to_expect.description')}
            </p>
            <p className="mb-6 text-lg sm:text-xl font-medium text-primary">
              {t('consultation.what_to_expect.gain')}
            </p>
            <ul className="space-y-4 inline-block text-left text-base sm:text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>{t('consultation.what_to_expect.gain1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>{t('consultation.what_to_expect.gain2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>{t('consultation.what_to_expect.gain3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;

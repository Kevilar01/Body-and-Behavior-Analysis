
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ClientReflectionsSection = () => {
  const { t } = useLanguage();

  const reflections = [
    t('consultation.reflections.quote1'),
    t('consultation.reflections.quote2'),
    t('consultation.reflections.quote3')
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in animation-delay-300">
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-8 sm:mb-12">
            {t('consultation.reflections.title')}
          </h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            {reflections.map((reflection, index) => (
              <blockquote key={index} className="relative p-6 bg-neutral-light/50 border-l-4 border-accent rounded-r-lg shadow-sm text-left">
                <Quote className="absolute top-2 left-2 w-8 h-8 text-accent/20 transform -translate-x-4 -translate-y-4" />
                <p className="text-sm sm:text-base text-neutral-taupe italic leading-relaxed z-10 relative">
                  {reflection}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReflectionsSection;

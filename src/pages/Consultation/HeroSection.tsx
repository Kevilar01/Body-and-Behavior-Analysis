
import { useLanguage } from '@/contexts/LanguageContext';
import TypewriterText from '@/components/TypewriterText';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-primary text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 leading-tight">
          <TypewriterText 
            text={t('consultation.hero.title')}
            delay={300}
            speed={80}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium"
          />
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

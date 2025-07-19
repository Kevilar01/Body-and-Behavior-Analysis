
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ConsultationPackages = () => {
  const { t } = useLanguage();

  const consultationPackages = [
    {
      id: 'character-analysis',
      title: t('consultation.packages.character_analysis.title'),
      sessions: t('consultation.packages.character_analysis.sessions'),
      description: t('consultation.packages.character_analysis.description'),
      featured: false
    },
    {
      id: 'vagus-nerve-reset',
      title: t('consultation.packages.vagus_nerve.title'),
      sessions: t('consultation.packages.vagus_nerve.sessions'),
      description: t('consultation.packages.vagus_nerve.description'),
      featured: false
    },
    {
      id: 'master-key',
      title: t('consultation.packages.master_key.title'),
      sessions: t('consultation.packages.master_key.sessions'),
      description: t('consultation.packages.master_key.description'),
      featured: false
    },
    {
      id: 'nutrition-beyond-plate',
      title: t('consultation.packages.nutrition.title'),
      sessions: t('consultation.packages.nutrition.sessions'),
      description: t('consultation.packages.nutrition.description'),
      featured: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-neutral-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-primary">
            {t('consultation.packages.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {consultationPackages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className="group relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in h-full flex flex-col bg-white border border-gray-200 hover:border-primary/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/5 to-transparent" />

              <CardHeader className="relative z-10 text-center pb-4 pt-6">
                <CardTitle className="text-lg lg:text-xl mb-3 font-semibold leading-tight transition-colors duration-300 text-primary group-hover:text-secondary">
                  {pkg.title}
                </CardTitle>
                {pkg.sessions && (
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    {pkg.sessions}
                  </div>
                )}
              </CardHeader>

              <CardContent className="relative z-10 text-center flex flex-col flex-grow px-6 pb-6">
                <p className="text-neutral-taupe mb-6 leading-relaxed text-sm lg:text-base flex-grow">
                  {pkg.description}
                </p>
                
                <Link to={`/consultation/${pkg.id}`} className="mt-auto">
                  <Button className="w-full group/btn transition-all duration-300 text-sm lg:text-base py-3 px-6 font-medium bg-primary hover:bg-secondary text-white hover:shadow-lg">
                    <span className="flex items-center justify-center gap-2">
                      {t('consultation.packages.view_details')}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </CardContent>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 text-primary">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M100,0 L100,50 Q100,100 50,100 L0,100 L0,0 Z" fill="currentColor" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationPackages;

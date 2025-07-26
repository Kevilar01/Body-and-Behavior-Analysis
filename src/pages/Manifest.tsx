import { useLanguage } from '@/contexts/LanguageContext';

const Manifest = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background-cream via-white to-primary/5 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-52 h-52 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          ></div>

          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6B6B' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Styled Image */}
          <div className="mb-12 flex justify-center">
            <img
              src="/lovable-uploads/_MG_3512.JPG"
              alt="Manifest Illustration"
              className="w-[300px] h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Page Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-elegante text-primary mb-4">
              {t('manifest.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl"></div>
            <div className="relative p-8 lg:p-12 space-y-8">
              {/* Opening Lines */}
              <div className="text-center space-y-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-elegante text-primary leading-relaxed">
                  {t('manifest.opening.line1')}
                </p>
                <div className="space-y-4 text-lg sm:text-xl text-neutral-taupe font-montserrat leading-relaxed">
                  <p>{t('manifest.opening.line2')}</p>
                  <p>{t('manifest.opening.line3')}</p>
                  <p>{t('manifest.opening.line4')}</p>
                </div>
              </div>

              {/* Key Insight */}
              <div className="text-center py-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur"></div>
                  <div className="relative space-y-4">
                    <p className="text-xl sm:text-2xl font-elegante text-primary">
                      {t('manifest.not_crisis')}
                    </p>
                    <p className="text-xl sm:text-2xl font-elegante text-accent">
                      {t('manifest.its_calling')}
                    </p>
                  </div>
                </div>
              </div>

              {/* The Calling */}
              <div className="space-y-6 text-lg sm:text-xl text-neutral-taupe font-montserrat leading-relaxed text-center">
                <p>{t('manifest.calling_to_strip')}</p>
                <p>{t('manifest.pause_noise')}</p>
                <p>{t('manifest.meet_version')}</p>
                <p className="text-primary font-medium">{t('manifest.not_fixed')}</p>
              </div>

              {/* Essence Unveiled Section */}
              <div className="py-8 space-y-6">
                <p className="text-2xl sm:text-3xl font-elegante text-primary text-center">
                  {t('manifest.essence_unveiled')}
                </p>
                <p className="text-lg sm:text-xl text-neutral-taupe font-montserrat leading-relaxed text-center">
                  {t('manifest.remembering_self')}
                </p>
              </div>

              {/* Transformation Section */}
              <div className="space-y-6 text-lg sm:text-xl text-neutral-taupe font-montserrat leading-relaxed text-center">
                <p>{t('manifest.transformation_space')}</p>
                <p>{t('manifest.through_analysis')}</p>
                <p>{t('manifest.reconnect_truth')}</p>
              </div>

              {/* Final Message */}
              <div className="py-8 text-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-2xl blur"></div>
                  <div className="relative space-y-6">
                    <p className="text-xl sm:text-2xl font-elegante text-primary">
                      {t('manifest.essence_not_build')}
                    </p>
                    <p className="text-xl sm:text-2xl font-elegante text-primary">
                      {t('manifest.born_with')}
                    </p>
                    <p className="text-2xl sm:text-3xl font-elegante text-accent font-medium">
                      {t('manifest.time_to_live')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifest;

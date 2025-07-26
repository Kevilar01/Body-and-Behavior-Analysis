
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CharacterAnalysis = () => {
  const { t } = useLanguage();

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/consultation" className="inline-flex items-center text-white hover:text-gray-200 mb-6 sm:mb-8 transition-colors text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {/* {t('char_analysis.back')} */}
            {t('Back to Consultation')}
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 sm:mb-6 animate-fade-in leading-tight">
            {/* {t('char_analysis.title')} */}
            {t('Character Analysis Mapping Session')}
          </h1>
          <div className="flex items-center gap-4 sm:gap-6 text-base sm:text-lg animate-fade-in animation-delay-300">
            {/* <span>{t('char_analysis.session_info')}</span> */}
            <span>{t('A foundational 1-on-1 session to understand your character structure through BodyMind Integration.')}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-base sm:prose-lg text-neutral-taupe leading-relaxed space-y-4 sm:space-y-6 animate-fade-in">
              <p className="text-lg sm:text-xl font-medium text-secondary leading-relaxed">
                {/* {t('char_analysis.description1')} */}
                {t('What to Expect From Your Body & Behavior Analysis Session')} 
              </p>

              
              
           <div className="text-sm sm:text-base leading-relaxed space-y-4">
  <p>Your session will unfold in 3 clear stages — each designed to help you reconnect with how you truly function, feel, and flow in life.</p>

  <h4 className="font-semibold">1. Initial Alignment</h4>
  <p>
    We’ll begin with a short introduction where I explain the purpose of the session and what you can expect from a Character Structure Analysis.
    You’ll understand your internal resources, emotional strengths, and how to access them in your favor.
  </p>
  <p>
    At this point, I’ll also ask you to share 3 specific questions or problems you're currently facing. These will be revisited in the final part of the session, once we’ve mapped your structure.
  </p>

  <h4 className="font-semibold">2. Investigation & Mapping</h4>
  <p>
    We’ll begin with a brief pre-analysis questionnaire to identify any emotional or physical history that may influence your structure.
    Then, I’ll observe 6 specific areas of your body— through video or live camera/pictures — which allows me to assess your character patterns in depth.
  </p>
  <p>These areas include: <strong>Head, Eyes, Mouth, Torso, Hips, and Legs</strong></p>
  <p>
    Each one reflects how your nervous system learned to protect you — and how it still shapes your thoughts, emotions, and behaviors today.
  </p>

  <h4 className="font-semibold">3. Your Personalized Feedback</h4>
  <p>In the first part of the feedback I’ll explain how you function:</p>
  <ul className="list-disc list-inside ml-4">
    <li>Your emotional strengths and internal resources</li>
    <li>Your internal conflicts and protective patterns</li>
    <li>Your basic needs and how to meet them</li>
    <li>Environments that support or block your natural flow</li>
  </ul>
  <p>
    In the second part, I’ll answer the <em>three personal questions</em> you brought at the beginning — with clarity on why those issues are present and how to move forward.
  </p>
  <p>
    You’ll leave the session with a sense of recognition, self-compassion, and a clear direction aligned with your truth and emotional needs.
  </p>
  <p className="italic">
    This session isn’t about fixing who you are — it’s about remembering how you were built… and learning how to finally live from that place with confidence.
  </p>
</div>

            </div>
            <div className="animate-fade-in animation-delay-300">
              <img 
                src="/lovable-uploads/consultation2.jpg" 
                alt="Abstract image of a circuit board representing character mapping" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 text-center animate-scale-in">
            <Card className="bg-neutral-light border-secondary/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-3 sm:mb-4">
                  {/* {t('char_analysis.cta.title')}</h3> */}
                  {t('Transform Your Pain Into Power')}</h3>
                <p className="text-neutral-taupe mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {/* {t('char_analysis.cta.description')} */}
                  {t('Experience the most comprehensive consultation program designed to create lasting emotional transformation.')}
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8">
                    {/* {t('char_analysis.cta.button')} */}
                    {t('Begin Your Transformation')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharacterAnalysis;

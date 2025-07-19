
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, PenTool, Lightbulb } from 'lucide-react';
import Container from '@/components/Container';
import SectionWrapper from '@/components/SectionWrapper';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead 
        title="Insights & Articles - Coming Soon"
        description="Deep dive articles and insights on Body and Behavior Analysis, emotional healing, and personal transformation are currently in development."
      />
      
      <div className="font-montserrat min-h-screen bg-background">
        {/* Hero Section */}
        <SectionWrapper className="bg-neutral-light">
          <Container size="lg" className="text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              {/* Icon */}
              <div className="mb-8">
                <BookOpen className="w-20 h-20 text-primary mx-auto mb-6" />
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 animate-fade-in">
                Insights & Articles
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Deep dive articles and insights on Body and Behavior Analysis, emotional healing, and personal transformation are currently in development. Stay tuned for thoughtful content that explores the intersection of psychology, somatic healing, and authentic self-discovery.
              </p>

              {/* Coming Soon Card */}
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-primary/20 shadow-lg">
                  <CardContent className="p-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lightbulb className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-semibold text-primary mb-4">
                        Coming Soon
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Thoughtful articles exploring the depths of character transformation, 
                        emotional healing practices, and the journey to authentic self-discovery.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* Content Preview Section */}
        <SectionWrapper className="bg-white">
          <Container size="lg">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  What to Expect
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our upcoming content will provide valuable insights into the transformative power of understanding your character structure and emotional patterns.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 mb-20">
                <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                  Body and Behavior Analysis Insights
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    In-depth explorations of character structures and their profound impact on personal growth and authentic relationships.
                  </p>
                </div>

                <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PenTool className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Emotional Healing Practices
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Practical guidance on somatic approaches to healing, nervous system regulation, and embodied transformation.
                  </p>
                </div>

                <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Personal Transformation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stories and strategies for authentic self-discovery, sustainable personal change, and living from your truth.
                  </p>
                </div>
              </div>

              {/* Elegant Divider */}
              <div className="flex items-center justify-center my-20 animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="flex-1 h-px bg-gray-200 max-w-32"></div>
                <div className="mx-8">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="flex-1 h-px bg-gray-200 max-w-32"></div>
              </div>

              {/* Closing Message */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '1.1s' }}>
                <p className="text-xl text-gray-700 font-medium italic max-w-3xl mx-auto leading-relaxed">
                  "Knowledge becomes wisdom when integrated with compassion and applied with intention."
                </p>
              </div>
            </div>
          </Container>
        </SectionWrapper>
      </div>
    </>
  );
};

export default Blog;

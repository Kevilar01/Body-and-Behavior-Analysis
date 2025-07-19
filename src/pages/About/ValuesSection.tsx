
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Users, Star } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      title: 'Authenticity',
      description: 'We believe in being genuine and true to ourselves and others in all interactions.',
      icon: Heart
    },
    {
      title: 'Growth Mindset',
      description: 'Every challenge is an opportunity to learn, grow, and become a better version of ourselves.',
      icon: Target
    },
    {
      title: 'Compassion',
      description: 'We approach every person with empathy, understanding, and unconditional positive regard.',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from coaching to customer service.',
      icon: Star
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-background-cream via-white to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6B6B' fill-opacity='0.03'%3E%3Cpath d='M30 30m-15 0a15,15 0 1,1 30,0a15,15 0 1,1 -30,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <h2 className="text-4xl sm:text-5xl font-elegante text-primary">
              Our Core Values
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center bg-white/50 backdrop-blur-md border border-white/40 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white/70 group h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <div className="mb-6">
                  {/* Icon Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl">
                    <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-elegante text-primary mb-4 group-hover:text-secondary transition-colors duration-300">{value.title}</h3>
                <p className="text-neutral-taupe text-sm sm:text-base leading-relaxed flex-grow font-elegante">{value.description}</p>
                
                {/* Bottom Accent */}
                <div className="mt-6">
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-secondary/50 transition-all duration-300"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

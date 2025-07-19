
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-background-cream/20 to-primary/5 overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-secondary/15 to-accent/8 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent/12 to-primary/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm border border-white/20">
                <img
                  src="/lovable-uploads/4a1350a8-8b8c-4b13-94b3-c3cf325988bb.png"
                  alt="Claudia Gimenes Fisher"
                  // className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center transition-all duration-500 hover:scale-105"
                  className="w-full h-auto object-contain transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-2 text-center lg:text-left" style={{ animationDelay: '0.2s' }}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 px-5 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/30 shadow-md">
              <Sparkles className="h-4 w-4 text-primary animate-sparkle" />
              <span className="text-sm font-semibold text-primary">Body and Behavior Analysis</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elegante leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Claudia Gimenes Fisher
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-accent font-medium italic">
              Body and Behavior Analysis
            </p>
            
            {/* Description */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-secondary/8 to-accent/10 rounded-xl blur opacity-50"></div>
              <div className="relative p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
                <p className="text-base lg:text-lg text-neutral-taupe leading-relaxed">
                  Helping you reconnect with the essence beneath your patterns.<br />
                  <span className="text-primary font-semibold">
                    Here, your body speaks, your story is heard, and your truth becomes your strength.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

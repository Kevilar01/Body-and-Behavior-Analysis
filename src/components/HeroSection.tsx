
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Show scroll indicator after animations complete
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScrollToNext();
    }
  };

  return (
    <section 
      id="hero-section"
      className="min-h-screen bg-gradient-to-br from-background-cream via-neutral-light to-background-cream flex items-center justify-center px-4 pt-16 relative overflow-hidden"
      role="banner"
      aria-label="Body and Behavior Analysis Hero Section"
    >
      {/* Ambient Background Motion */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Mouse Following Glow Effect */}
      <div 
        className="absolute pointer-events-none opacity-20 transition-opacity duration-300 hover:opacity-30"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(44, 95, 95, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
        aria-hidden="true"
      />

      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-accent/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Title with Typewriter Effect */}
        <header>
          <h1 
            className={`font-elegante text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 transition-all duration-1000 ease-out hover:brightness-110 hover:drop-shadow-sm ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TypewriterText 
              text="Body and Behavior Analysis"
              delay={200}
              speed={20}
              className="font-elegante text-4xl md:text-6xl lg:text-7xl font-bold text-primary"
            />
          </h1>
        </header>

        {/* Subtitle with Staggered Fade-in */}
        <div 
          className={`font-montserrat text-lg md:text-xl lg:text-2xl text-neutral-taupe max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out hover:text-primary/80 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            animationDelay: '2.8s',
            animation: isVisible ? 'fade-in 1s ease-out 2.8s both' : 'none'
          }}
        >
          <p>
            Helping you reconnect with the essence beneath your patterns. Here, your body speaks, your story is heard, and your truth becomes your strength.
          </p>
        </div>

        {/* Optional Gold Accent Highlight */}
        <div 
          className={`mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent mx-auto rounded-full transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            animationDelay: '3.5s',
            animation: isVisible ? 'scale-in 0.8s ease-out 3.5s both' : 'none'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 cursor-pointer group ${
          showScrollIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        onClick={handleScrollToNext}
        role="button"
        tabIndex={0}
        aria-label="Scroll to next section"
        onKeyDown={handleScrollKeyDown}
      >
        <div className="flex flex-col items-center text-primary/70 group-hover:text-primary transition-colors duration-300">
          <span className="text-sm font-montserrat mb-2 group-hover:scale-105 transition-transform duration-300">
            Explore
          </span>
          <ChevronDown 
            size={24} 
            className="animate-bounce group-hover:animate-pulse transition-all duration-300" 
          />
        </div>
      </div>

      {/* Reduced Motion Fallback */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-typewriter,
          .animate-bounce,
          .animate-float,
          .animate-pulse {
            animation: none !important;
          }
          
          h1 {
            animation: fade-in 0.6s ease-out forwards !important;
          }
          
          .animate-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

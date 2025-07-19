
import { Target } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-background-cream via-white to-secondary/5 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6B6B' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Header */}
          <div className="inline-flex items-center space-x-4 mb-12">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elegante text-primary">
              My Mission
            </h1>
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          {/* Content */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-xl"></div>
            <div className="relative p-8 lg:p-12 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg">
              <p className="text-lg sm:text-xl lg:text-2xl text-neutral-taupe leading-relaxed font-elegante">
                I am dedicated to empowering individuals to discover their authentic selves and build character that leads to meaningful, fulfilling lives. Through evidence-based coaching methods and compassionate support, I guide people on their journey to personal transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

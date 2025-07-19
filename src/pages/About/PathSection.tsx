
import { Quote, Sparkles } from 'lucide-react';

const PathSection = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-white via-background-cream/30 to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6B6B' fill-opacity='0.03'%3E%3Cpath d='M20 20m-10 0a10,10 0 1,1 20,0a10,10 0 1,1 -20,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
            <Sparkles className="h-6 w-6 text-accent animate-sparkle" />
            <h2 className="text-4xl sm:text-5xl font-elegante text-primary">
              Why I Chose This Path
            </h2>
            <Sparkles className="h-6 w-6 text-primary animate-sparkle" style={{ animationDelay: '1s' }} />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="animate-fade-in space-y-12" style={{ animationDelay: '0.2s' }}>
          {/* Opening Quote */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl mb-6 shadow-lg">
              <Quote className="h-8 w-8 text-white" />
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-3 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg"></div>
              <div className="relative p-8 lg:p-10 bg-white/60 backdrop-blur-md rounded-xl border border-white/40">
                <p className="text-2xl sm:text-3xl lg:text-4xl text-accent font-medium italic leading-relaxed font-elegante">
                  "Because clarity didn't come from fixing myself… It came from remembering who I already was."
                </p>
              </div>
            </div>
          </div>
          
          {/* Story Content */}
          <div className="space-y-8 text-base lg:text-lg leading-relaxed text-neutral-taupe">
            <div className="p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="font-elegante">
                For years, I was searching — not just for tools or answers — but for something that could finally explain <span className="text-accent font-semibold">why I felt so disconnected from myself.</span> I looked confident on the outside, but deep down, I felt small. Inferior. Lost. Unworthy. Like I was always one step away from being "good enough"… but never quite there.
              </p>
            </div>
            
            <div className="p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="font-elegante">
                I was capable — but I couldn't see it. I had gifts — but I couldn't access them. Because I didn't yet know how to <span className="text-primary font-semibold">accept who I truly was.</span>
              </p>
            </div>
            
            {/* Transformation Moment */}
            <div className="my-12 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/15 via-primary/10 to-secondary/15 rounded-2xl blur opacity-60"></div>
              <div className="relative py-10 px-8 bg-gradient-to-br from-accent/8 via-white/80 to-primary/8 backdrop-blur-md rounded-2xl border-l-4 border-accent shadow-lg">
                <div className="text-center space-y-4">
                  <p className="text-2xl lg:text-3xl font-semibold text-accent font-elegante">
                    Then Body and Behavior Analysis found me.
                  </p>
                  <p className="text-2xl lg:text-3xl font-semibold text-primary font-elegante">
                    And everything changed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="font-elegante">
                For the first time, I saw myself with clarity — not as broken, but as someone <span className="text-secondary font-semibold">designed a different way</span>, with specific strengths, sensitivities, and emotional intelligence that had been buried under years of comparison, judgment, and self-doubt.
              </p>
            </div>
            
            <div className="p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="font-elegante">
                This tool didn't just describe me. <strong className="text-primary font-bold">It revealed me.</strong> And in that moment, something inside shifted — from shame to understanding, from resistance to motivation, from fear to direction.
              </p>
            </div>
            
            <div className="p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="font-elegante">
                Today, what moves me is not performance or perfection — but <span className="font-semibold text-accent">connection</span>, <span className="font-semibold text-primary">truth</span>, and <span className="font-semibold text-secondary">authenticity</span>. These aren't just values. They're how I choose to live. And that's why I chose this path: Because it gave meaning to my pain, and purpose to my journey.
              </p>
            </div>
          </div>
          
          {/* Closing Statement */}
          <div className="text-center pt-10 border-t border-primary/10">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 via-secondary/8 to-accent/10 rounded-2xl blur opacity-60"></div>
              <div className="relative p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg">
                <p className="text-xl lg:text-2xl font-medium text-primary mb-6 font-elegante">
                  And now, I share it — so you can see yourself the way I finally saw me.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                  <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">
                    Clear
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                    Whole
                  </span>
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                    Already enough
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;

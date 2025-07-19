import { Brain, Heart, Sparkles, Check } from 'lucide-react';

const CorePromiseSection = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-background-cream via-white to-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6B6B' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-elegante text-primary mb-4">
            Come Home to Yourself
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Core Promise Text Block */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute -inset-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl"></div>
            <div className="relative p-8 lg:p-12">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-elegante text-primary leading-relaxed mb-8">
                I help you understand how your body and emotions were shaped — and how you can reconnect with who you truly are, with safety, clarity, and deep self-love.
              </p>
              
              <div className="space-y-6 text-lg sm:text-xl text-neutral-taupe font-montserrat leading-relaxed">
                <p>
                  What you feel today is not weakness or failure — it's simply an outdated pattern that can be seen, released, and transformed.
                </p>
                <p>
                  I guide you through that process using powerful tools — so you can come back to yourself and live with more wholeness and direction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Outcomes - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="group">
            <div className="relative h-full p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 font-montserrat">Emotional clarity</h3>
                <p className="text-neutral-taupe leading-relaxed font-montserrat">
                  Finally understanding what you feel, why you feel it, and what it's trying to tell you.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative h-full p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 font-montserrat">Authentic grounding</h3>
                <p className="text-neutral-taupe leading-relaxed font-montserrat">
                  Feeling safe and whole inside your body — not just in your mind.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative h-full p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 font-montserrat">Aligned direction</h3>
                <p className="text-neutral-taupe leading-relaxed font-montserrat">
                  Living with intention, not autopilot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tangible Benefits */}
        <div className="relative mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl"></div>
          <div className="relative max-w-4xl mx-auto p-8 lg:p-12 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-elegante text-primary text-center mb-8">
              What You'll Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Emotional regulation in moments of overwhelm",
                "Clarity on how to move through life with truth",
                "Stronger sense of direction grounded in your truth",
                "Deep self-awareness: work with, not against, yourself",
                "Confidence from understanding your emotional map",
                "Lasting inner peace: feel at home in your skin"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-neutral-taupe font-montserrat leading-relaxed group-hover:text-primary transition-colors duration-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unique Differentiator */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {/* Soft Wave Divider */}
          <div className="absolute -top-12 left-0 right-0 h-24 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-elegante text-primary mb-6">
                A Unique Approach
              </h3>
              <div className="relative">
                <div className="absolute -inset-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg"></div>
                <div className="relative p-6 lg:p-8">
                  <p className="text-lg sm:text-xl text-neutral-taupe font-montserrat leading-relaxed">
                    What makes this work unique is the way it brings together distinct yet complementary tools — Body and Behavior Analysis Mapping, Somatic Healing practices, EFT, and Aromatherapy.
                  </p>
                  <p className="text-lg sm:text-xl text-neutral-taupe font-montserrat leading-relaxed mt-4">
                    Each tool offers a different access point to your emotional clarity, and together, they guide you in the same direction: back to your truth, your balance, and your inner safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Tools List */}
            <div className="space-y-4">
              {[
                "Body and Behavior Analysis Mapping",
                "Somatic Healing",
                "EFT",
                "Aromatherapy"
              ].map((tool, index) => (
                <div key={index} className="group">
                  <div className="relative p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-lg font-medium text-primary font-montserrat group-hover:text-secondary transition-colors duration-300">
                        {tool}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Wave Divider */}
          <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default CorePromiseSection;

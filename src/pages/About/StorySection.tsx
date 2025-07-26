
import { Heart, ChevronDown } from 'lucide-react';

const StorySection = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-white via-primary/3 to-background-cream/40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-br from-primary/6 to-secondary/4 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-accent/6 to-primary/4 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="animate-fade-in order-2 lg:order-1 sticky top-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-white/30 to-transparent backdrop-blur-sm border border-white/30">
                <img
                  src="/lovable-uploads/_MG_3512.JPG"
                  alt="Professional portrait"
                  // className="w-full h-80 lg:h-96 object-cover object-center transition-all duration-500 hover:scale-105"
                  className="w-full h-auto object-contain transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Story Content */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-md">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-elegante text-primary">My Story</h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-transparent lg:block hidden"></div>
            </div>
            
            {/* Story Paragraphs */}
            <div className="space-y-6 text-base lg:text-lg text-neutral-taupe">
              <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="leading-relaxed font-elegante">
                  For a long time, I felt broken. Like something inside me was fundamentally wrong.
                  I didn't feel at home in my own body — and I didn't even know what I truly desired.
                  I lived in a constant loop of doubt, emotional dependence, and the need for external validation.
                  I waited for someone to save me — the perfect partner, the dream life, the magic answer.
                </p>
              </div>
              
              <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="leading-relaxed font-elegante">
                  I got married. I had twins.
                  I traveled to over 35 countries.
                  I built the life that once lived in my childhood dreams.
                </p>
                <p className="leading-relaxed font-elegante mt-4 text-accent font-semibold">
                  But somewhere along the way, I lost myself.
                </p>
              </div>
              
              <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="leading-relaxed font-elegante">
                  Living between cultures — Brazil, England, Nigeria — far from family for over 30 years,
                  I became a master at adapting… but a stranger to my inner truth.
                  Between motherhood and migration, I stopped listening to my own voice.
                  I forgot to want more. I forgot that I could.
                </p>
              </div>

              <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="leading-relaxed font-elegante">
                  Eventually came the silence.
                  The emptiness.
                  The depression.
                  A deep lack of self-love and identity.
                </p>
                <p className="leading-relaxed font-elegante mt-4 text-secondary font-semibold text-lg">
                  And then… a turning point.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continuation Arrow */}
        <div className="flex justify-center my-12">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce">
            <ChevronDown className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Second Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-base lg:text-lg text-neutral-taupe text-center">
            <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="leading-relaxed font-elegante">
                I realized that talking about my wounds wasn't healing them — it was feeding my emotional dependency.
                Victimhood was keeping me stuck.
                Complaining was anchoring me deeper into pain.
              </p>
            </div>

            <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="leading-relaxed font-elegante">
                True transformation came when I stopped running from myself.
                When I decided to feel, to listen, to validate my pain — without being consumed by it.
                When I stopped expecting someone else to give me what only I could offer myself.
              </p>
            </div>

            <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="leading-relaxed font-elegante">
                I found the woman hidden behind the wounded child.
                And I chose her.
                I approved of her.
                I honored her as the wisest voice I had ever silenced.
              </p>
            </div>

            {/* Closing Section */}
            <div className="relative mt-10">
              <div className="absolute -inset-3 bg-gradient-to-r from-accent/15 via-primary/10 to-secondary/15 rounded-2xl blur opacity-50"></div>
              <div className="relative p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl">
                <p className="leading-relaxed font-elegante font-semibold text-lg text-accent mb-4">
                  This is why I do this work.
                </p>
                <p className="leading-relaxed font-elegante">
                  Because I believe that every woman deserves to return to her essence.
                  To come back home to her body.
                  To see that nothing in her is broken — only waiting to be seen, felt, and reclaimed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

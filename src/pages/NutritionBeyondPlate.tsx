
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Leaf, Shield } from 'lucide-react';

const NutritionBeyondPlate = () => {
  return (
    <div className="bg-background-cream min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/consultation" className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Consultation
          </Link>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-elegante font-medium mb-4 sm:mb-6 leading-tight">
              Nutrition Beyond the Plate
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 font-montserrat">
              Discover how your emotions, thoughts, and inner conflicts affect your relationship with food and your body.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Your Relationship Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-elegante text-3xl sm:text-4xl font-bold text-primary mb-6">
              Understanding Your Relationship with Food
            </h2>
            <p className="text-lg text-neutral-taupe font-montserrat max-w-3xl mx-auto leading-relaxed">
              True nourishment goes beyond calories and nutrients. It encompasses how we feel, think, and connect with ourselves through food.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-white/60 p-8 rounded-2xl shadow-sm border border-accent/10">
                <div className="flex items-start gap-4 mb-4">
                  <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-elegante text-xl font-semibold text-primary mb-3">
                      Emotional Nourishment
                    </h3>
                    <p className="text-neutral-taupe font-montserrat leading-relaxed">
                      We often eat to fill emotional voids—seeking comfort, love, or security through food when our hearts need something different.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 p-8 rounded-2xl shadow-sm border border-accent/10">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-elegante text-xl font-semibold text-primary mb-3">
                      Protective Patterns
                    </h3>
                    <p className="text-neutral-taupe font-montserrat leading-relaxed">
                      Sometimes our bodies hold weight as protection—a way of creating boundaries when we struggle to set them emotionally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 p-8 rounded-2xl shadow-sm border border-accent/10">
                <div className="flex items-start gap-4 mb-4">
                  <Leaf className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-elegante text-xl font-semibold text-primary mb-3">
                      Mind-Body Connection
                    </h3>
                    <p className="text-neutral-taupe font-montserrat leading-relaxed">
                      Your body remembers every emotion you've swallowed, every word you didn't speak, every boundary you didn't set.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in animation-delay-300">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=600&fit=crop" 
                alt="Peaceful lake surrounded by trees, representing inner calm and emotional balance" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Deeper Story Section */}
      <section className="py-16 bg-white/40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-elegante text-3xl sm:text-4xl font-bold text-primary mb-8">
            The Deeper Story Your Body Tells
          </h2>
          
          <div className="prose prose-lg max-w-none font-montserrat text-neutral-taupe space-y-6">
            <p className="text-lg leading-relaxed">
              What you're experiencing isn't a lack of willpower or discipline. 
              It's your body's intelligent response to unprocessed emotions and unmet needs.
            </p>

            <div className="bg-primary/5 p-8 rounded-2xl my-12 border-l-4 border-primary">
              <p className="text-lg font-medium text-primary mb-4">
                "Food becomes the language when we don't have words for our pain."
              </p>
              <p className="text-base text-neutral-taupe">
                When we can't express our feelings, our bodies find other ways to communicate—
                through cravings, through holding onto weight, through our relationship with nourishment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-elegante text-lg font-semibold text-primary mb-3">
                  What We Often Seek in Food:
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Comfort and soothing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Love and connection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Control and stability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Escape from overwhelm</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-elegante text-lg font-semibold text-primary mb-3">
                  What We Actually Need:
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Emotional processing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Safe expression of feelings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Healthy boundaries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Self-compassion and care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-elegante text-3xl sm:text-4xl font-bold text-primary mb-6">
              Your Journey to Food Freedom
            </h2>
            <p className="text-lg text-neutral-taupe font-montserrat max-w-2xl mx-auto leading-relaxed">
              This isn't about another diet or restriction. It's about understanding the conversation 
              between your emotions and your relationship with nourishment.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div className="bg-white/60 p-6 rounded-xl flex-1">
                <h3 className="font-elegante text-xl font-semibold text-primary mb-3">
                  Listen to Your Body's Story
                </h3>
                <p className="text-neutral-taupe font-montserrat leading-relaxed">
                  We begin by understanding what your body has been trying to tell you—
                  the emotions it's holding, the protection it's seeking.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div className="bg-white/60 p-6 rounded-xl flex-1">
                <h3 className="font-elegante text-xl font-semibold text-primary mb-3">
                  Heal the Emotional Roots
                </h3>
                <p className="text-neutral-taupe font-montserrat leading-relaxed">
                  Together, we address the underlying emotional patterns that create 
                  your relationship with food—gently and with compassion.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div className="bg-white/60 p-6 rounded-xl flex-1">
                <h3 className="font-elegante text-xl font-semibold text-primary mb-3">
                  Create New Pathways
                </h3>
                <p className="text-neutral-taupe font-montserrat leading-relaxed">
                  We develop healthier ways to meet your emotional needs, 
                  creating a sustainable and loving relationship with both food and yourself.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl">
              <h3 className="font-elegante text-2xl font-bold text-primary mb-4">
                Ready to Transform Your Relationship with Food?
              </h3>
              <p className="text-lg mb-8 text-neutral-taupe font-montserrat max-w-2xl mx-auto">
                This journey isn't about perfection—it's about understanding, healing, and creating 
                a compassionate relationship with yourself and nourishment.
              </p>
              <Link to="/contact">
                <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-montserrat font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Begin Your Healing Journey
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-elegante text-3xl sm:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-taupe font-montserrat">
              Understanding this gentle approach to nutrition and emotional healing
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="bg-white/80 rounded-xl border border-accent/10 px-6 shadow-sm">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent py-6">
                What makes this approach different from traditional nutrition counseling?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed pb-6">
                Traditional nutrition focuses on what you eat. We focus on why you eat—exploring the emotional, 
                psychological, and energetic aspects of your relationship with food. This creates lasting change 
                from the inside out.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 rounded-xl border border-accent/10 px-6 shadow-sm">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent py-6">
                Will you give me a specific diet plan to follow?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed pb-6">
                No restrictive diets. Instead, we help you develop intuitive awareness of what your body 
                truly needs—both nutritionally and emotionally. This creates a sustainable, loving relationship 
                with food rather than another cycle of restriction and rebellion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 rounded-xl border border-accent/10 px-6 shadow-sm">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent py-6">
                How can emotions really affect my physical health and weight?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed pb-6">
                Chronic emotional stress creates inflammation, affects hormones, and dysregulates metabolism 
                more than food alone. Unprocessed emotions like anxiety, anger, or sadness keep your nervous 
                system in survival mode, directly impacting your body's ability to maintain healthy weight.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/80 rounded-xl border border-accent/10 px-6 shadow-sm">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent py-6">
                What if I'm afraid to explore my emotional relationship with food?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed pb-6">
                This is completely natural and honored. We move at your pace, creating a safe space where 
                you never have to go deeper than feels right. Healing happens through gentle awareness, 
                not force or pressure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/80 rounded-xl border border-accent/10 px-6 shadow-sm">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent py-6">
                How is this different from therapy or counseling?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed pb-6">
                While we explore emotional patterns, this work specifically focuses on your relationship 
                with food and body. We use body-based awareness and character analysis to understand 
                patterns, creating practical tools for transformation in your daily relationship with nourishment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/80 rounded-xl border border-accent/10 px-6 shadow-sm">
              <AccordionTrigger className="font-montserrat font-semibold text-primary hover:text-accent py-6">
                Can this approach help with specific eating challenges?
              </AccordionTrigger>
              <AccordionContent className="font-montserrat text-neutral-taupe leading-relaxed pb-6">
                Yes. Whether you struggle with emotional eating, restrictive patterns, body image issues, 
                or feeling out of control around food, we address the root emotional and energetic causes 
                rather than just managing symptoms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default NutritionBeyondPlate;

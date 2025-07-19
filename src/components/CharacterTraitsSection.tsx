
import { Brain, Heart, Users, TrendingUp, User, Zap, Shield, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const CharacterTraitsSection = () => {
  const keyBenefits = [
    {
      icon: Brain,
      title: "Increased Self-Awareness",
      description: "Recognize patterns that shape your thoughts, emotions, and behaviors, understanding why you react in certain ways, especially under stress"
    },
    {
      icon: Heart,
      title: "Healing Emotional Blocks",
      description: "Address limiting aspects while leveraging strengths - each trait brings both discipline and challenges"
    },
    {
      icon: Zap,
      title: "Mind-Body Integration",
      description: "Release physical tension and emotional blocks for greater freedom and vitality - body and mind are inseparable"
    },
    {
      icon: TrendingUp,
      title: "Personal Growth",
      description: "Create new pathways through neuroplasticity for healthier relationships and stronger sense of self"
    }
  ];

  const characterTraitDefenses = [
    {
      type: "Schizoid",
      defense: "A response to early rejection, leading to withdrawal and emotional distance",
      color: "border",
      style: { backgroundColor: '#4A6B6B', borderColor: '#D4AF37', color: 'white' },
      hasImage: true
    },
    {
      type: "Oral",
      defense: "Rooted in a lack of nurturing, creating dependency and a need for connection",
      color: "border",
      style: { backgroundColor: '#4A6B6B', borderColor: '#D4AF37', color: 'white' },
      hasImage: true
    },
    {
      type: "Psychopathic",
      defense: "Stemming from betrayal, leading to control and dominance as a defense",
      color: "border",
      style: { backgroundColor: '#4A6B6B', borderColor: '#D4AF37', color: 'white' },
      hasImage: true
    },
    {
      type: "Masochistic",
      defense: "Formed by shame or suppression, leading to endurance and self-sacrifice",
      color: "border",
      style: { backgroundColor: '#4A6B6B', borderColor: '#D4AF37', color: 'white' },
      hasImage: true
    },
    {
      type: "Rigid",
      defense: "Tied to conditional love, creating perfectionism and fear of vulnerability",
      color: "border",
      style: { backgroundColor: '#4A6B6B', borderColor: '#D4AF37', color: 'white' },
      hasImage: true
    }
  ];

  const realLifeExamples = [
    {
      type: "The Oral Character Trait",
      scenario: "Imagine someone has had a really tough day. They feel frustrated, overwhelmed, and unsafe. The first thing they do when they get home is cry, look for comfort food, and call a friend to share their emotions.",
      emotionalResponse: "Seeks external nurturing and connection to regulate emotions",
      physicalTraits: [
        "A rounder, softer body shape",
        "Full cheeks and a retraced chin (when viewed from the side)",
        "A deep emotional connection in their eyes when they engage in conversation"
      ],
      corePattern: "These behaviors indicate a strong oral character trait—a person who, since early childhood, has learned to seek external nurturing and connection.",
      color: "bg-secondary/10 border-secondary/20"
    },
    {
      type: "The Masochistic Character Trait",
      scenario: "Imagine a second person who also had a difficult day. Instead of crying (oral) or suppressing (rigid), they react differently.",
      emotionalResponse: "Internalizes frustration, feeling weighed down rather than expressing it",
      physicalTraits: [
        "A compact, solid body structure that holds in emotions",
        "Tension in the neck, shoulders, and stomach, as if carrying invisible weight",
        "A tendency to physically contract—as if pulling inward instead of expanding"
      ],
      corePattern: "They carry emotional burdens and feel responsible for everything, choosing to endure instead of asking for help.",
      color: "bg-accent/10 border-accent/20"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background-cream" id="character-traits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="font-elegante text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Understanding Your Character Traits: The Science of Mind-Body Connection
          </h2>
          
          {/* Introduction Text */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="font-montserrat text-lg md:text-xl text-neutral-taupe leading-relaxed animate-fade-in animation-delay-300">
              Did you know that the way you think, act, feel, and even your physical characteristics are connected to how your nervous system was shaped? This process is called <span className="font-semibold text-primary">myelination of the nervous system</span>, and it is so powerful that it determines your emotional, mental, character patterns and physical appearance.
            </p>
            
            <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-400">
              Our character traits begin forming even before birth, while we are still in the womb, as the myelination of the nervous system shapes the way we process emotions and experiences. This process continues until around the age of seven, deeply influencing not just how we think and feel but also how our physical body develops.
            </p>
            
            <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-500">
              Freud, the father of psychoanalysis, suggested that within the body, there is a mind. Reich took this further and demonstrated that mind, emotions, and body are one—they do not function separately. The way we respond to situations emotionally and mentally is reflected in our posture, facial structure, and even the way we move and interact with the world, the mind and body are deeply interconnected. He argued that emotional trauma and unresolved conflicts don't just exist in the mind but also manifest physically leading to the development of Body and Behavior Analysis.
            </p>
            
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg animate-fade-in animation-delay-600">
              <p className="font-montserrat text-lg text-primary leading-relaxed font-medium">
                A <span className="font-bold">Body and Behavior Analyst</span> is someone that is trained in understanding and working with the relationship between emotional regulation, thought patterns and physical expressions/body shape.
              </p>
            </div>
          </div>
        </div>

        {/* Why Understanding Character Traits Matters */}
        <div className="mb-16">
          <h3 className="font-elegante text-2xl md:text-3xl font-bold text-primary text-center mb-8 animate-fade-in animation-delay-700">
            Why Understanding Character Traits Matters
          </h3>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed text-center animate-fade-in animation-delay-800">
              Many people feel "stuck" in certain behaviors or emotional patterns without understanding why. Reich's Body and Behavior Analysis, combined with the science of myelination, provides a framework to uncover these patterns and address them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className={`card-hover bg-white border-primary/10 animate-fade-in`}
                style={{ animationDelay: `${900 + index * 200}ms` }}
              >
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat text-lg font-bold text-primary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat text-sm text-neutral-taupe text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Path Forward */}
        <div className="mb-16">
          <h3 className="font-elegante text-2xl md:text-3xl font-bold text-primary text-center mb-8 animate-fade-in animation-delay-1200">
            Path Forward
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-1300">
              Understanding your character traits isn't about labeling yourself but about discovering how your mind and body work together. It's a journey of self-discovery that empowers you to embrace your authentic self. By uncovering the roots of your patterns, you can move beyond automatic responses and live a more intentional, fulfilling life.
            </p>
            
            <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-1400">
              Reich's work, supported by the science of myelination, shows us that transformation is not only possible but also deeply rewarding. When you understand who you are—and how you became that way—you gain the power to grow into the person you were meant to be.
            </p>
          </div>
        </div>

        {/* Character Trait Defense Mechanisms */}
        <div className="mb-16">
          <h3 className="font-elegante text-2xl md:text-3xl font-bold text-primary text-center mb-8 animate-fade-in animation-delay-1500">
            Character Traits as Defense Mechanisms
          </h3>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed text-center animate-fade-in animation-delay-1600">
              Each trait represents a defense mechanism created by the mind and body to protect us from pain or unmet needs. For example:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characterTraitDefenses.map((trait, index) => (
              <Card 
                key={trait.type}
                className={`card-hover border animate-fade-in`}
                style={{ 
                  animationDelay: `${1700 + index * 100}ms`,
                  backgroundColor: trait.style.backgroundColor,
                  borderColor: trait.style.borderColor,
                  color: trait.style.color
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5" style={{ color: trait.style.color }} />
                    <CardTitle className="font-elegante text-lg font-bold" style={{ color: trait.style.color }}>
                      {trait.type}
                    </CardTitle>
                  </div>
                  {trait.hasImage && (
                    <div className="mt-4 flex justify-center">
                      <img
                        src={
                          trait.type === "Schizoid" 
                            ? "/lovable-uploads/b522ba79-0a5c-4362-92d1-2cf0e20f7d6f.png"
                            : trait.type === "Oral"
                            ? "/lovable-uploads/f815bdca-4baf-4bc2-8473-8dda95eac559.png"
                            : trait.type === "Psychopathic"
                            ? "/lovable-uploads/2271e8db-afee-40c6-8b98-f63e4ab57569.png"
                            : trait.type === "Masochistic"
                            ? "/lovable-uploads/c3e7bf54-7501-407e-b8f6-5f010d5049df.png"
                            : "/lovable-uploads/fddf79df-2d99-4f9d-8193-75e8107cacdf.png"
                        }
                        alt={
                          trait.type === "Schizoid" 
                            ? "Brain with geometric shapes and golden sunburst" 
                            : trait.type === "Oral"
                            ? "Brain with geometric shapes, green circles and golden sunburst"
                            : trait.type === "Psychopathic"
                            ? "Brain with geometric shapes and golden sunburst"
                            : "Brain with geometric shapes and golden sunburst"
                        }
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat text-sm leading-relaxed" style={{ color: trait.style.color }}>
                    {trait.defense}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Real Life Examples */}
        <div className="mb-16">
          <h3 className="font-elegante text-2xl md:text-3xl font-bold text-primary text-center mb-8 animate-fade-in animation-delay-1800">
            Real-Life Examples
          </h3>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed text-center animate-fade-in animation-delay-1900">
              To understand this better, let's look at some real-life examples:
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {realLifeExamples.map((example, index) => (
              <Card 
                key={example.type}
                className={`card-hover ${example.color} border animate-fade-in`}
                style={{ animationDelay: `${2000 + index * 300}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <User className="h-6 w-6 text-primary" />
                    <CardTitle className="font-elegante text-xl font-bold text-primary">
                      {example.type}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 font-montserrat">
                      Scenario
                    </Badge>
                    <p className="font-montserrat text-sm text-neutral-taupe italic">
                      {example.scenario}
                    </p>
                  </div>
                  
                  <div>
                    <Badge variant="outline" className="mb-2 font-montserrat">
                      Emotional Response
                    </Badge>
                    <p className="font-montserrat text-sm text-neutral-taupe">
                      {example.emotionalResponse}
                    </p>
                  </div>
                  
                  <div>
                    <Badge variant="outline" className="mb-2 font-montserrat">
                      Physical Traits
                    </Badge>
                    <ul className="font-montserrat text-sm text-neutral-taupe space-y-1">
                      {example.physicalTraits.map((trait, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <Badge variant="outline" className="mb-2 font-montserrat">
                      Core Pattern
                    </Badge>
                    <p className="font-montserrat text-sm text-neutral-taupe">
                      {example.corePattern}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-8">
            <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed text-center animate-fade-in animation-delay-2600">
              Again, this reaction isn't random—it's wired into their nervous system, body, and emotional patterns.
            </p>
          </div>
        </div>

        {/* Tangible Benefits */}
        <div className="mb-16">
          <h3 className="font-elegante text-2xl md:text-3xl font-bold text-primary text-center mb-8 animate-fade-in animation-delay-2700">
            Tangible Benefits
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="space-y-4">
              <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-2800">
                <span className="text-primary font-bold">✔ Emotional regulation:</span> learn to calm your mind and body in moments of overwhelm.
              </p>
              
              <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-2900">
                <span className="text-primary font-bold">✔ Clarity in how to move through your life,</span> connected to your truth.
              </p>
              
              <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-3000">
                <span className="text-primary font-bold">✔ Stronger sense of direction,</span> grounded in who you are, not in what others expect.
              </p>
              
              <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-3100">
                <span className="text-primary font-bold">✔ Deep self-awareness:</span> know your limitations and virtues to work with, not against, yourself.
              </p>
              
              <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-3200">
                <span className="text-primary font-bold">✔ Confidence and self-love</span> that comes from understanding your emotional map.
              </p>
              
              <p className="font-montserrat text-lg text-neutral-taupe leading-relaxed animate-fade-in animation-delay-3300">
                <span className="text-primary font-bold">✔ Lasting inner peace:</span> feel at home in your own skin, no longer lost or trying to fit where you don't belong.
              </p>
            </div>
          </div>
        </div>

        {/* Unique Differentiator */}
        <div className="mb-16">
          <h3 className="font-elegante text-2xl md:text-3xl font-bold text-primary text-center mb-8 animate-fade-in animation-delay-3400">
            🔮 Unique Differentiator
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg animate-fade-in animation-delay-3500">
              <p className="font-montserrat text-lg text-primary leading-relaxed font-medium">
                <span className="font-bold">What makes this work unique is the way it brings together distinct yet complementary tools</span> — Body and Behavior Analysis Mapping, Somatic Healing practices, EFT, Vagus Nerve activation, and Aromatherapy. Each tool offers a different access point to your emotional clarity, and together, they guide you in the same direction: back to your truth, your balance, and your inner safety.
              </p>
            </div>
          </div>
        </div>

        {/* Why Is This Important */}
        <div className="mb-16">
          <h3 className="font-elegante text-2xl md:text-3xl font-bold text-primary text-center mb-8 animate-fade-in animation-delay-3600">
            Why Is This Important?
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="card-hover bg-white border-primary/10 animate-fade-in animation-delay-3700">
                <CardHeader className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="font-montserrat text-lg font-bold text-primary">
                    Self-Awareness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat text-sm text-neutral-taupe text-center">
                    So we recognize our emotional responses before they control us
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-white border-primary/10 animate-fade-in animation-delay-3800">
                <CardHeader className="text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="font-montserrat text-lg font-bold text-primary">
                    Acceptance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat text-sm text-neutral-taupe text-center">
                    So we stop feeling guilty for who we are and instead embrace it
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-white border-primary/10 animate-fade-in animation-delay-3900">
                <CardHeader className="text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="font-montserrat text-lg font-bold text-primary">
                    Personal Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat text-sm text-neutral-taupe text-center">
                    So we can develop healthier ways of thinking, acting, and interacting
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg animate-fade-in animation-delay-4000">
            <p className="font-montserrat text-lg md:text-xl text-primary leading-relaxed font-medium">
              "We are exactly who we need to be. The key is understanding how we were programmed to be—and using that knowledge to create a life that aligns with our true nature."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterTraitsSection;

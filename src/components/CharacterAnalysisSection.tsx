import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Compass, Flower2, Moon, Puzzle, Search, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const CharacterAnalysisSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Introduction */}
        <div className="text-center mb-16">
          <h2 className="font-elegante text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Body and Behavior Analysis
          </h2>
          <p className="font-elegante text-xl sm:text-2xl text-accent mb-4">
            What to Expect from Your Body and Behavior Analysis Mapping Method
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="font-montserrat text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-taupe">
              A step-by-step guide to your first session of emotional mapping and body-based insight
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {/* Step 1 */}
          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-3">
                    1. Opening & Initial Alignment
                  </h3>
                  <div className="space-y-4 text-neutral-taupe">
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      Your session will begin with a moment of connection and presence. I will introduce myself and open a warm space for you to feel seen, heard, and welcomed.
                    </p>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      This is a sacred moment of alignment. Together, we'll create a space of emotional safety so you can express yourself freely and feel supported. I'll remind you:
                    </p>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed italic text-accent">
                      "In this space, you are the most important person. Nothing matters more than your truth. You are safe to be fully yourself."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Compass className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-3">
                    2. The Purpose of Body and Behavior Analysis Mapping Method
                  </h3>
                  <div className="space-y-4 text-neutral-taupe">
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      This method is not about labeling or fixing you — it's about understanding how you adapted to life. Your body tells the story of the emotional strategies you developed to survive, protect yourself, and belong.
                    </p>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed font-medium">
                      Through this session, you'll discover:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Your core emotional structure (your "blueprint")</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• The traits that are most active in your system</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Your natural strengths and inner resources</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Environments and relationships that support or challenge your system</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Why you respond the way you do to certain situations — and how to shift that</li>
                    </ul>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      This is a deep dive into self-awareness — a map to guide your healing and expansion.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Flower2 className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-3">
                    3. Anamnesis – Pre-Analysis Questionnaire
                  </h3>
                  <div className="space-y-4 text-neutral-taupe">
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      Before we begin the scoring process, I will guide you through a brief anamnesis — a set of important questions that ensure your body analysis is accurate, clear, and grounded in truth.
                    </p>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      These questions are not about judgment, but about ensuring that any physical changes or interventions do not interfere with the integrity of your structural reading.
                    </p>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      This part of the process is essential so I can distinguish what is part of your natural expression versus what has been externally modified. It allows me to conduct the Body and Behavior Analysis Mapping Method with greater precision and empathy.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Moon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-3">
                    4. Body Observation – The Scoring Process
                  </h3>
                  <div className="space-y-4 text-neutral-taupe">
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      After the initial conversation, I will gently guide you through a body-based observation. We'll look at six specific areas of your body: Head, Eyes, Mouth, Torso, Hips, and Legs.
                    </p>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed font-medium">
                      Based on:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• The form and posture of each part</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• The sensations or tensions you notice</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• The visible expression of each area</li>
                    </ul>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      …I will create your Character Structure Chart — a visual guide to your dominant traits.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 5 */}
          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Puzzle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-3">
                    5. First Part of the Debrief – How You Function
                  </h3>
                  <div className="space-y-4 text-neutral-taupe">
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      Once your map is complete, we move into the first part of your feedback session. This is where I help you understand how your unique system operates.
                    </p>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed font-medium">
                      We'll explore:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Your dominant traits and emotional peaks</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• How your character traits combine and influence each other</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• The order in which you respond to life emotionally, mentally, and behaviorally</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Environments and situations that support or challenge your system</li>
                    </ul>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      This section offers deep insight into why you behave, react, and feel the way you do — and what you can begin to shift.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 6 */}
          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Search className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-primary text-lg mb-3">
                    6. Second Part of the Debrief – 3 Life-Related Questions
                  </h3>
                  <div className="space-y-4 text-neutral-taupe">
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      Now that you understand your structure, we'll apply this knowledge directly to your life. You'll be invited to share three current issues or emotional blocks that feel difficult, confusing, or repetitive.
                    </p>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed font-medium">
                      These can be:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Emotional struggles (e.g., fear of abandonment, low motivation)</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Relationship conflicts</li>
                      <li className="font-montserrat text-sm sm:text-base leading-relaxed">• Inner blocks that stop you from creating or making decisions</li>
                    </ul>
                    <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                      Together, we'll explore how your character structure influences these patterns — and how you can begin to shift from surviving to thriving.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing Reminder */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 sm:p-12 border border-accent/10 mb-12">
          <div className="flex items-start mb-6">
            <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full mr-4 mt-1 flex-shrink-0">
              <Heart className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-primary text-lg mb-4">
                Closing Reminder
              </h3>
              <div className="space-y-4 text-neutral-taupe">
                <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                  This session is a mirror — not to judge you, but to reflect your emotional truth with clarity, compassion, and deep respect.
                </p>
                <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                  You are not broken. Your structure is not your limit — it is the map to your freedom.
                </p>
                <p className="font-montserrat text-sm sm:text-base leading-relaxed">
                  I am here to walk beside you as you remember who you are beneath the roles and protections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/consultation">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CharacterAnalysisSection;

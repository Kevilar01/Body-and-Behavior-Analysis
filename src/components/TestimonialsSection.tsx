
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-elegante text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What People Are Saying
          </h2>
          <p className="font-montserrat text-lg text-neutral-taupe max-w-2xl mx-auto">
            Real stories from people who have experienced transformation through our method
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="bg-white border-accent/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/cara.jpg" 
                  alt="Sarah"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-montserrat font-semibold text-primary">Cara</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-montserrat text-sm text-neutral-taupe leading-relaxed">
                "This experience helped me understand myself in a new way. It was eye-opening to see how certain patterns in my life are determined by my character traits. Claudia was very knowledgable and gave me a clearer sense of why I am the way I am—and how I can grow moving forward."
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="bg-white border-accent/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=60&h=60&fit=crop&crop=face" 
                  alt="Michael"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-montserrat font-semibold text-primary">Emma</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-montserrat text-sm text-neutral-taupe leading-relaxed">
                "I finally feel aligned with my true self. The transformation has been profound and lasting."
              </p>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="bg-white border-accent/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=60&h=60&fit=crop&crop=face" 
                  alt="Emma"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-montserrat font-semibold text-primary">Derick</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-montserrat text-sm text-neutral-taupe leading-relaxed">
                "The compassionate support and practical tools made all the difference in my personal growth journey."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

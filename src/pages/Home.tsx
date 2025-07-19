
import React from 'react';
import HeroSection from "@/components/HeroSection";
import CharacterTraitsSection from "@/components/CharacterTraitsSection";
import CorePromiseSection from "@/components/CorePromiseSection";
import CharacterAnalysisSection from "@/components/CharacterAnalysisSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

const HomePage = () => {
  return (
    <div className="bg-background-cream min-h-screen">
      <HeroSection />
      <CharacterTraitsSection />
      <section id="next-section" aria-label="Core promise and character analysis">
        <CorePromiseSection />
      </section>
      <CharacterAnalysisSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;

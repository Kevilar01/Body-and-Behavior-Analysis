
import React from 'react';

interface CharacterTraitCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const CharacterTraitCard: React.FC<CharacterTraitCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  className = ""
}) => {
  return (
    <article className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg card-hover text-center relative overflow-hidden ${className}`}>
      {/* Visual Enhancement Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-lg"></div>
      
      {imageSrc && (
        <div className="mb-6 flex justify-center">
          <img 
            src={imageSrc} 
            alt={imageAlt || title}
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      
      <header className="relative z-10">
        <h3 className="font-elegante text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">
          {title}
        </h3>
      </header>
      
      <div className="relative z-10">
        <p className="font-montserrat text-sm sm:text-base lg:text-lg text-neutral-taupe leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl"></div>
    </article>
  );
};

export default CharacterTraitCard;

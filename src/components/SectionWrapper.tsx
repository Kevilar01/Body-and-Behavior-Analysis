
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article' | 'aside';
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  id,
  as: Component = 'section',
  ...ariaProps
}) => {
  return (
    <Component 
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
      id={id}
      {...ariaProps}
    >
      {children}
    </Component>
  );
};

export default SectionWrapper;

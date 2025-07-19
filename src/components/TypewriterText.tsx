import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 0, speed = 100, className = '' }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
    setShowCursor(true);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + (currentIndex === 0 ? 500 : speed)); // Initial delay plus typing speed

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && !isComplete) {
      // Animation complete, start cursor fade out
      setIsComplete(true);
      const fadeTimer = setTimeout(() => {
        setShowCursor(false);
      }, 1000); // Keep cursor for 1 second after completion

      return () => clearTimeout(fadeTimer);
    }
  }, [currentIndex, text, delay, speed, isComplete]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span 
        className={`inline-block w-0.5 bg-current ml-1 transition-opacity duration-500 ${
          showCursor && !isComplete ? 'animate-pulse opacity-100' : 
          showCursor && isComplete ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          height: '1em',
          animation: showCursor && !isComplete ? 'blink-caret 1s step-end infinite' : 'none'
        }}
      />
    </span>
  );
};

export default TypewriterText;
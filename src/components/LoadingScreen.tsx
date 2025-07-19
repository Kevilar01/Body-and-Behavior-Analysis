
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background-cream flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin border-t-primary"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-pulse border-t-secondary/40" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <p className="text-primary font-montserrat text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

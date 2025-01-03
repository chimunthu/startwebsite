import React from 'react';

interface LogoWrapperProps {
  children: React.ReactNode;
  isScrolled: boolean;
}

export const LogoWrapper = ({ children, isScrolled }: LogoWrapperProps) => {
  return (
    <div className="relative h-full">
      {/* White background container */}
      <div 
        className={`
          absolute inset-0
          bg-white 
          shadow-lg
          transition-all duration-300
          ${isScrolled ? 'w-[240px] md:w-[280px]' : 'w-[280px] md:w-[320px]'}
        `}
      />
      
      {/* Content container */}
      <div className="relative h-full px-6 flex items-center">
        {children}
      </div>
    </div>
  );
};
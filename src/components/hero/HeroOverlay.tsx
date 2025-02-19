import React from 'react';
import { logo } from '../../assets/images';

interface HeroOverlayProps {
  children: React.ReactNode;
  image: string;
  showLogo?: boolean;
}

const HeroOverlay = ({ children, image, showLogo = true }: HeroOverlayProps) => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        
        {/* Logo Overlay */}
        {showLogo && (
          <div className="absolute left-0 inset-y-0 w-1/3 flex items-center justify-center p-12">
            <div className="relative w-full max-w-[400px] aspect-square opacity-50">
              <img
                src={logo}
                alt="Start Space Logo"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 hover:opacity-75"
              />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HeroOverlay;

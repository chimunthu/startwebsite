import React from 'react';
import Navbar from '../layout/Navbar';
import HeroContent from './HeroContent';
import HeroOverlay from './HeroOverlay';
import { heroImages } from '../../assets/images';

const Hero = () => {
  return (
    <HeroOverlay image={heroImages.main}>
      <Navbar />
      <div className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <HeroContent />
        </div>
      </div>
    </HeroOverlay>
  );
};

export default Hero;
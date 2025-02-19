import React from 'react';
import { Link } from 'react-router-dom';
import HeroOverlay from './HeroOverlay';
import Logo from '../layout/Logo';

interface InternalHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const InternalHero = ({ title, subtitle, image }: InternalHeroProps) => {
  return (
    <HeroOverlay image={image} showLogo={false}>
      <div className="min-h-[50vh] pt-32 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-12">
            {/* Logo Side */}
            <Link 
              to="/"
              className="hidden md:block transition-colors duration-300 hover:text-accent"
            >
              <Logo className="w-32 h-32 transition-all duration-300 hover:scale-105" />
            </Link>

            {/* Content Side */}
            <div className="flex-1">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </HeroOverlay>
  );
};

export default InternalHero;

import React from 'react';
import { logo } from '../../../assets/images';

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Start Space"
      className={`
        w-auto max-w-full object-contain
        transition-all duration-300
        ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}
      `}
    />
  );
};
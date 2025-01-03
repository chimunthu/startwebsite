import React from 'react';
import { logo } from '../../assets/images';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'w-8 h-8' }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Start Space Logo"
      className={className}
    />
  );
};

export default Logo;
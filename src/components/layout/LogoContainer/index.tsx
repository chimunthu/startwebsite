import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from './hooks/useScrollPosition';
import { LogoWrapper } from './LogoWrapper';
import { Logo } from './Logo';

const LogoContainer = () => {
  const isScrolled = useScrollPosition();

  return (
    <div 
      className={`
        fixed top-0 left-0 z-50 
        transition-all duration-300
        ${isScrolled ? 'h-[72px]' : 'h-[88px]'}
      `}
    >
      <LogoWrapper isScrolled={isScrolled}>
        <Link 
          to="/"
          className="relative block w-full h-full hover:opacity-90 transition-opacity"
        >
          <Logo isScrolled={isScrolled} />
        </Link>
      </LogoWrapper>
    </div>
  );
};

export default LogoContainer;
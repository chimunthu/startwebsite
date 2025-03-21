import React from 'react';
import { Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Navbar = () => {
  const isScrolled = useScrollPosition();
  const location = useLocation();

  return (
    <nav 
      className={`
        fixed w-full z-40 
        transition-all duration-300 
        ${isScrolled ? 'bg-primary shadow-lg py-4' : 'bg-transparent py-6'}
        ${location.pathname === '/' ? '' : 'bg-primary shadow-lg py-4'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled || location.pathname !== '/' ? 'text-accent' : 'text-white'
            }`} />
            <span className="font-heading text-white text-2xl font-bold">START SPACE</span>
          </Link>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;

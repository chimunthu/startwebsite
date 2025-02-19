import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/images';

const LogoContainer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="relative">
        {/* White background container */}
        <div 
          className={`absolute top-0 left-0 w-48 h-full bg-white shadow-lg transition-all duration-300 ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Logo container */}
        <Link 
          to="/"
          className="relative block px-6 hover:opacity-90 transition-opacity"
        >
          <img
            src={logo}
            alt="Start Space"
            className={`transition-all duration-300 ${
              isScrolled ? 'h-12' : 'h-16'
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogoContainer;

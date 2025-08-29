import React, { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    { name: t('common.menu.about'), path: '/sobre' },
    { name: t('common.menu.services'), path: '/servicos' },
    { name: t('common.menu.community'), path: '/comunidade' },
    { name: t('common.menu.contact'), path: '/contato' }
  ];

  const leftMenuItems = menuItems.slice(0, 2);
  const rightMenuItems = menuItems.slice(2, 4);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left Menu Items */}
          <div className="flex items-center space-x-8">
            {leftMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-accent ${
                  location.pathname === item.path 
                    ? 'text-accent' 
                    : isScrolled || location.pathname !== '/' 
                      ? 'text-white' 
                      : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled || location.pathname !== '/' ? 'text-accent' : 'text-white'
            }`} />
            <span className="font-heading text-white text-2xl font-bold">START SPACE</span>
          </Link>

          {/* Right Menu Items */}
          <div className="flex items-center space-x-8">
            {rightMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-accent ${
                  location.pathname === item.path 
                    ? 'text-accent' 
                    : isScrolled || location.pathname !== '/' 
                      ? 'text-white' 
                      : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Mobile Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled || location.pathname !== '/' ? 'text-accent' : 'text-white'
            }`} />
            <span className="font-heading text-white text-xl font-bold">START SPACE</span>
          </Link>

          {/* Mobile Right Side */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:text-accent transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-300 hover:text-accent ${
                    location.pathname === item.path 
                      ? 'text-accent' 
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

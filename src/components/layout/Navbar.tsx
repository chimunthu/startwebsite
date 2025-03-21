import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import LanguageSelector from '../language/LanguageSelector';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useTranslation } from '../../hooks/useTranslation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { label: t('common.menu.about'), href: '/sobre' },
    { label: t('common.menu.services'), href: '/servicos' },
    { label: t('common.menu.community'), href: '/comunidade' },
    { label: t('common.menu.contact'), href: '/contato' },
  ];

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
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled || location.pathname !== '/' ? 'text-accent' : 'text-white'
            }`} />
            <span className="font-heading text-white text-2xl font-bold">START SPACE</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body text-sm font-medium transition-colors ${
                  isScrolled || location.pathname !== '/' 
                    ? 'text-white hover:text-accent' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSelector />
            <Button 
              variant={isScrolled || location.pathname !== '/' ? "secondary" : "primary"}
              className={isScrolled || location.pathname !== '/' ? "border-accent text-accent hover:bg-accent hover:text-primary" : ""}
              onClick={() => window.location.href = '/registro'}
            >
              {t('common.buttons.startNow')}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-primary/95 rounded-lg p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-body text-white text-sm font-medium hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="secondary"
                className="w-full text-center border-accent text-accent hover:bg-accent hover:text-primary"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/registro';
                }}
              >
                {t('common.buttons.startNow')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

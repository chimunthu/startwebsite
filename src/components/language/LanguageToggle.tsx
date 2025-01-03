import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { languages } from './languageData';

const LanguageToggle = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white hover:text-accent transition-colors"
      aria-label={`Switch to ${currentLanguage === 'pt' ? 'English' : 'Portuguese'}`}
    >
      <img
        src={languages[currentLanguage].flag}
        alt={languages[currentLanguage].name}
        className="w-5 h-5 rounded-sm object-cover"
      />
      <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
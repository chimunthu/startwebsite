import React, { createContext, useContext, useState, useEffect, useCallback, startTransition } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'pt',
  setLanguage: () => {},
  isLoading: true,
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || navigator.language.startsWith('pt') ? 'pt' : 'en';
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    document.documentElement.lang = currentLanguage;
    setIsLoading(false);
  }, [currentLanguage]);

  const changeLanguage = useCallback((lang: string) => {
    startTransition(() => {
      setCurrentLanguage(lang);
    });
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
    </div>;
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage: changeLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

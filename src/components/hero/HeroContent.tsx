import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <div className="ml-auto w-2/3 max-w-3xl px-4 sm:px-6 md:px-8">
      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-tight">
        {t('home.hero.title')}
        <span className="block text-accent mt-2 sm:mt-3">{t('home.hero.subtitle')}</span>
      </h1>
      <p className="font-body text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
        {t('home.hero.description')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="primary" 
          className="w-full sm:w-auto flex items-center justify-center text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
        >
          {t('common.buttons.learnMore')}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          variant="secondary"
          className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
        >
          {t('common.buttons.contactUs')}
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;

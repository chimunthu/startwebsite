import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import InternalHero from '../../components/hero/InternalHero';
import MultiStepForm from '../../components/forms/MultiStepForm';
import { heroImages } from '../../assets/images';

const JoinPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <InternalHero
        title={t('join.hero.title')}
        subtitle={t('join.hero.subtitle')}
        image={heroImages.join}
      />
      <div className="py-16">
        <MultiStepForm />
      </div>
    </div>
  );
};

export default JoinPage;
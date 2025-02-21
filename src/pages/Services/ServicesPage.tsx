import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import InternalHero from '../../components/hero/InternalHero';
import ServicesList from './sections/ServicesList';
import UniqueApproach from './components/UniqueApproach';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <InternalHero
        title={t('services.hero.title')}
        subtitle={t('services.hero.subtitle')}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978"
      />
      <ServicesList />
      <UniqueApproach />
    </div>
  );
};

export default ServicesPage;

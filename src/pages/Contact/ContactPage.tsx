import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import InternalHero from '../../components/hero/InternalHero';
import DetailedContactInfo from './sections/DetailedContactInfo';
import LocationMap from './sections/LocationMap';
import SocialConnect from './sections/SocialConnect';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <InternalHero
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <DetailedContactInfo />
            <LocationMap />
          </div>
        </div>
      </section>
      
      <SocialConnect />
    </div>
  );
};

export default ContactPage;

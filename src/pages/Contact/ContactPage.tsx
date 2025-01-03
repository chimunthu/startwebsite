import React from 'react';
import InternalHero from '../../components/hero/InternalHero';
import ContactInfo from './sections/ContactInfo';
import ContactForm from './sections/ContactForm';
import LocationMap from './sections/LocationMap';
import SocialConnect from './sections/SocialConnect';

const ContactPage = () => {
  return (
    <div className="bg-white">
      <InternalHero
        title="Fale Conosco"
        subtitle="Estamos aqui para ajudar você a transformar suas ideias em realidade. Entre em contato conosco!"
        image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6"
      />
      <ContactInfo />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactForm />
        <LocationMap />
      </div>
      <SocialConnect />
    </div>
  );
};

export default ContactPage;
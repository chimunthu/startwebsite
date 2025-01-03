import React from 'react';
import InternalHero from '../../components/hero/InternalHero';
import ServicesList from './sections/ServicesList';
import UniqueApproach from './components/UniqueApproach';

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <InternalHero
        title="Nossos Serviços"
        subtitle="Soluções completas para transformar sua ideia em um negócio de sucesso, com suporte especializado em cada etapa da jornada."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978"
      />
      <ServicesList />
      <UniqueApproach />
    </div>
  );
};

export default ServicesPage;
import React from 'react';
import { Rocket, Download, Users, PiggyBank } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';

const services = [
  {
    title: 'Aceleração de Startups',
    description: 'Ajudamos startups a acelerar seu crescimento fornecendo mentorias personalizadas, conexões estratégicas, treinamentos e acesso a investidores. Nosso programa de aceleração é projetado para impulsionar o crescimento rápido e sustentável do seu negócio.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    icon: Rocket
  },
  {
    title: 'Programa de Incubação',
    description: 'Oferecemos um programa de incubação para startups em estágio inicial, fornecendo treinamentos, mentorias e acesso a investimentos para ajudar as empresas a se desenvolverem e crescerem. Ideal para empreendedores que estão começando sua jornada.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    icon: Download
  },
  {
    title: 'Eventos de Networking',
    description: 'Realizamos eventos regulares para promover o networking entre startups, empreendedores, investidores e outros profissionais do ecossistema de inovação. Construa conexões valiosas que podem impulsionar seu negócio.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
    icon: Users
  },
  {
    title: 'Investimentos',
    description: 'O Start Space investe em startups promissoras que participam de nosso programa de aceleração ou incubação, fornecendo capital semente e acesso a investidores estratégicos. Transforme seu potencial em crescimento real.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
    icon: PiggyBank
  }
];

const ServicesList = () => {
  return (
    <div>
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          {...service}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ServicesList;

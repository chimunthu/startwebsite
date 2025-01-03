import React from 'react';
import InternalHero from '../../../components/hero/InternalHero';
import { aboutImages } from '../../../assets/images';

const Hero = () => {
  return (
    <InternalHero
      title="Inovação com Propósito"
      subtitle="Somos um hub de inovação que integra fé e empreendedorismo, capacitando líderes para construir negócios que transformam vidas e geram impacto positivo no Reino de Deus."
      image={aboutImages.hero}
    />
  );
};

export default Hero;
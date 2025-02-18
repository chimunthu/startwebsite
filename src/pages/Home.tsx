import React from 'react';
import HeroSlider from '../components/hero/HeroSlider';
import Services from '../components/services/Services';
import Testimonials from '../components/testimonials/Testimonials';
import { useTranslation } from '../hooks/useTranslation';

function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <HeroSlider />
      <Services />
      <Testimonials />
    </>
  );
}

export default Home;
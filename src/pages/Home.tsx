import React from 'react';
import HeroSlider from '../components/hero/HeroSlider';
import Services from '../components/services/Services';
import Testimonials from '../components/testimonials/Testimonials';

function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <Testimonials />
    </>
  );
}

export default Home;
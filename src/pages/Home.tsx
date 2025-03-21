import React from 'react';
import HeroSlider from '../components/hero/HeroSlider';
import Services from '../components/services/Services';
import Features from '../components/home/Features';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <Services />
      <Features />
    </div>
  );
};

export default Home;

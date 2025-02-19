import React from 'react';
import HeroSlider from '../components/hero/HeroSlider';
import Services from '../components/services/Services';
import Features from '../components/home/Features';
import Community from '../components/home/Community';
import Testimonials from '../components/testimonials/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <Services />
      <Features />
      <Community />
      <Testimonials />
    </div>
  );
};

export default Home;

import React from 'react';
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import History from './sections/History';
import Values from './sections/Values';
import SuccessStories from './sections/SuccessStories';
import Partners from './sections/Partners';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Overview />
      <History />
      <Values />
      <SuccessStories />
      <Partners />
    </div>
  );
};

export default AboutPage;

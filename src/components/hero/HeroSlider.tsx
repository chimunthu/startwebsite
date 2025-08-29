import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroOverlay from './HeroOverlay';
import Button from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';

const HeroSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = t('home.hero.slides') as Array<{ title: string; subtitle: string; description: string; theme: string; actions: { primary: string; secondary: string } }>;

  // Add validation
  if (!Array.isArray(slides)) {
    console.error('Missing or invalid slides data');
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const heroImages = [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984"
  ];

  return (
    <div className="relative h-[70vh] overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <HeroOverlay image={heroImages[index]}>
            <div className="h-[70vh] flex items-center">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                {/* Adjusted margin-top to account for logo space */}
                <div className="text-white relative z-10 mt-24 md:mt-0">
                  <div className="ml-auto w-full md:w-2/3">
                    <span className="text-accent text-lg md:text-xl mb-4 block">
                      {slide.theme}
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                      {slide.title}
                      <span className="block text-accent">{slide.subtitle}</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </HeroOverlay>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

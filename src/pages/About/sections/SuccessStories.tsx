import React from 'react';
import SuccessCard from '../components/SuccessCard';

const stories = [
  {
    name: 'Ana Silva',
    company: 'EcoTech Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    quote: 'O Start Space foi fundamental para alinhar nossa visão de negócio com propósito cristão.',
    metrics: {
      growth: '300%',
      impact: '50k',
      jobs: '25'
    }
  },
  {
    name: 'Carlos Santos',
    company: 'EduConnect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    quote: 'A mentoria nos ajudou a crescer mantendo nossos valores intactos.',
    metrics: {
      growth: '250%',
      impact: '30k',
      jobs: '15'
    }
  },
  {
    name: 'Mariana Costa',
    company: 'HealthTech Care',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    quote: 'Encontramos o equilíbrio perfeito entre lucro e propósito.',
    metrics: {
      growth: '400%',
      impact: '75k',
      jobs: '40'
    }
  }
];

const SuccessStories = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos empreendedores que transformaram seus negócios
            através do Start Space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <SuccessCard key={story.name} {...story} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold">
            Ver Mais Cases
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

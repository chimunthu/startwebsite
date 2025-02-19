import React from 'react';
import TimelineEvent from '../components/TimelineEvent';

const historyEvents = [
  {
    year: 2020,
    title: 'Fundação do Start Space',
    description: 'Nascemos com a visão de unir empreendedorismo e valores cristãos.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca'
  },
  {
    year: 2021,
    title: 'Primeira Turma de Aceleração',
    description: '20 startups transformadas através do nosso programa pioneiro.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b'
  },
  {
    year: 2022,
    title: 'Expansão Nacional',
    description: 'Alcançamos empreendedores em todo o Brasil.',
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163'
  }
];

const History = () => {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          Nossa História
        </h2>
        
        <div className="relative">
          {/* Timeline line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
          
          <div className="space-y-16 md:space-y-24">
            {historyEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                {...event}
                align={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;

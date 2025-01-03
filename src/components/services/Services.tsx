import React from 'react';
import { Rocket, Download, MousePointer, BookOpen } from 'lucide-react';
import ServiceStep from './ServiceStep';

const services = [
  {
    number: 1,
    icon: Rocket,
    title: "Aceleração de Startups",
    description: "Programa intensivo de aceleração com mentoria especializada, recursos e suporte para impulsionar o crescimento do seu negócio."
  },
  {
    number: 2,
    icon: Download,
    title: "Programa de Incubação",
    description: "Suporte completo para startups em estágio inicial, incluindo espaço de trabalho, mentoria e acesso à nossa rede de parceiros."
  },
  {
    number: 3,
    icon: MousePointer,
    title: "Eventos de Networking",
    description: "Conecte-se com outros empreendedores, mentores e investidores em nossos eventos exclusivos de networking e conhecimento."
  },
  {
    number: 4,
    icon: BookOpen,
    title: "Investimentos",
    description: "Oportunidade de investimento para startups alinhadas com nossos valores. Conectamos você com nossa rede de investidores."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-bg-secondary" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções completas para transformar sua ideia em um negócio de sucesso
          </p>
        </div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
              <ServiceStep
                key={index}
                number={service.number}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Rocket, Users, LightbulbIcon, PiggyBank } from 'lucide-react';

const services = [
  {
    title: 'Aceleração de Startups',
    description: 'Programa intensivo para impulsionar o crescimento do seu negócio com mentoria especializada.',
    icon: Rocket,
  },
  {
    title: 'Networking Estratégico',
    description: 'Conecte-se com empreendedores, investidores e mentores alinhados com valores cristãos.',
    icon: Users,
  },
  {
    title: 'Incubação de Ideias',
    description: 'Transforme sua ideia em um negócio viável com suporte completo desde o início.',
    icon: LightbulbIcon,
  },
  {
    title: 'Investimentos',
    description: 'Acesso a capital e investidores que compartilham dos mesmos valores e visão.',
    icon: PiggyBank,
  },
];

const Services = () => {
  return (
    <div id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para apoiar sua jornada empreendedora,
            desde a ideação até o crescimento sustentável.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="bg-blue-600 rounded-full p-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {service.description}
                </p>
                <button className="mt-6 text-blue-600 font-medium hover:text-blue-700">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';
import ValueCard from '../components/ValueCard';
import { Target, Heart, Users } from 'lucide-react';

const values = [
  {
    title: 'Missão',
    icon: Target,
    content: 'Capacitar empreendedores a construir negócios prósperos alinhados com valores cristãos, gerando impacto positivo na sociedade.'
  },
  {
    title: 'Visão',
    icon: Heart,
    content: 'Ser referência global em desenvolvimento de negócios que integram excelência profissional e princípios do Reino.'
  },
  {
    title: 'Valores',
    icon: Users,
    content: 'Integridade, Excelência, Inovação, Colaboração, Propósito e Fé.'
  }
];

const Values = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
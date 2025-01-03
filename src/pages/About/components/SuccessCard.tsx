import React from 'react';

interface SuccessCardProps {
  name: string;
  company: string;
  image: string;
  quote: string;
  metrics: {
    growth: string;
    impact: string;
    jobs: string;
  };
}

const SuccessCard = ({ name, company, image, quote, metrics }: SuccessCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="font-heading font-bold text-lg">{name}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      <blockquote className="text-gray-600 italic mb-6">
        "{quote}"
      </blockquote>

      <div className="grid grid-cols-3 gap-4 border-t pt-4">
        <div className="text-center">
          <p className="text-accent font-bold text-xl">{metrics.growth}</p>
          <p className="text-sm text-gray-600">Crescimento</p>
        </div>
        <div className="text-center">
          <p className="text-accent font-bold text-xl">{metrics.impact}</p>
          <p className="text-sm text-gray-600">Impactados</p>
        </div>
        <div className="text-center">
          <p className="text-accent font-bold text-xl">{metrics.jobs}</p>
          <p className="text-sm text-gray-600">Empregos</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
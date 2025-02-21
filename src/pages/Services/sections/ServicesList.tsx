import React, { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { Rocket, Download, Users, PiggyBank } from 'lucide-react';

const serviceIcons = {
  acceleration: Rocket,
  incubation: Download,
  networking: Users,
  investment: PiggyBank,
};

const serviceImages = {
  acceleration: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  incubation: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
  networking: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
  investment: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
};

const serviceKeys = ['acceleration', 'incubation', 'networking', 'investment'];

const ServicesList = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const services = serviceKeys.map((key) => ({
    key,
    title: t(`services.${key}.title`),
    description: t(`services.${key}.description`),
    image: serviceImages[key as keyof typeof serviceImages],
    Icon: serviceIcons[key as keyof typeof serviceIcons],
  }));

  const filteredServices =
    filter === 'all'
      ? services
      : services.filter((service) => service.key === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Filter Button Section */}
      <div className="flex flex-wrap justify-center mb-20 gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 border rounded-full ${
            filter === 'all' ? 'bg-primary text-white border-primary' : 'bg-transparent text-gray-700 border-gray-300'
          }`}
        >
          {t('services.filters.all', { defaultValue: 'All Services' })}
        </button>
        {serviceKeys.map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 border rounded-full ${
              filter === key ? 'bg-primary text-white border-primary' : 'bg-transparent text-gray-700 border-gray-300'
            }`}
          >
            {t(`services.${key}.title`)}
          </button>
        ))}
      </div>

      {/* Service Cards in two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.map((service) => (
          <div key={service.key} className="relative bg-white rounded-lg shadow overflow group mb-10">
            {/* Service Image with hover zoom */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Floating Icon positioned in the center */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-4 shadow-lg">
              <service.Icon className="h-8 w-8 text-white" />
            </div>
            {/* Text Section */}
            <div className="p-6 pt-8 text-center">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;

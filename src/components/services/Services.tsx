import React from 'react';
import { Rocket, Download, MousePointer, BookOpen } from 'lucide-react';
import ServiceStep from './ServiceStep';
import { useTranslation } from '../../hooks/useTranslation';

const services = [
  {
    number: 1,
    icon: Rocket,
    title: "home.services.items.0.title",
    description: "home.services.items.0.description"
  },
  {
    number: 2,
    icon: Download,
    title: "home.services.items.1.title",
    description: "home.services.items.1.description"
  },
  {
    number: 3,
    icon: MousePointer,
    title: "home.services.items.2.title",
    description: "home.services.items.2.description"
  },
  {
    number: 4,
    icon: BookOpen,
    title: "home.services.items.3.title",
    description: "home.services.items.3.description"
  }
];

const Services = () => {
   const { t } = useTranslation();
  return (
    <section className="py-20 bg-bg-secondary" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            {t("home.services.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("home.services.subtitle")}
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
                title={t(service.title)}
                description={t(service.description)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

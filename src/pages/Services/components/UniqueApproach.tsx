import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { Rocket, PiggyBank, Brain } from 'lucide-react';

const UniqueApproach = () => {
  const { t } = useTranslation();

  // Section title and description from locale files
  const sectionTitle = t('services.uniqueApproach.title');
  const sectionDescription = t('services.uniqueApproach.description');

  // Define approaches in the desired order: Braço, Bolso, Cérebro
  const approaches = [
    {
      key: 'braco',
      title: t('services.uniqueApproach.approaches.braco.title'),
      description: t('services.uniqueApproach.approaches.braco.description'),
      color: t('services.uniqueApproach.approaches.braco.color'),
      icon: Rocket,
    },
    {
      key: 'bolso',
      title: t('services.uniqueApproach.approaches.bolso.title'),
      description: t('services.uniqueApproach.approaches.bolso.description'),
      color: t('services.uniqueApproach.approaches.bolso.color'),
      icon: PiggyBank,
    },
    {
      key: 'cerebro',
      title: t('services.uniqueApproach.approaches.cerebro.title'),
      description: t('services.uniqueApproach.approaches.cerebro.description'),
      color: t('services.uniqueApproach.approaches.cerebro.color'),
      icon: Brain,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-6">{sectionTitle}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {approaches.map((approach) => (
            <div key={approach.key} className="relative group">
              {/* Circular Card */}
              <div className="aspect-square rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center justify-center text-center relative overflow-visible group-hover:-translate-y-2">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b from-${approach.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
                
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-heading font-bold">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm px-4">
                    {approach.description}
                  </p>
                </div>

                {/* Icon Container */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-full bg-${approach.color} flex items-center justify-center`}>
                      <approach.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueApproach;

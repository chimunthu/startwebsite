import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('home.features.title')}</h2>
          <p className="text-xl text-gray-600">{t('home.features.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('home.features.items').map((feature: any, index: number) => (
            <div key={index} className="p-6">
              <div className="w-12 h-12 mb-4 text-accent">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

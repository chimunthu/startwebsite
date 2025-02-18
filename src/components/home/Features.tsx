import React from 'react';
import { Heart, Users, Lightbulb } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const iconMap = {
  'Heart': Heart,
  'Users': Users,
  'Lightbulb': Lightbulb,
};

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">
            {t('home.features.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('home.features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {t('home.features.items').map((feature: any, index: number) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group p-6 rounded-xl hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-accent/20 transition-shadow mb-6">
                  <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

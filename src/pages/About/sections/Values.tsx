import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

const Values = () => {
  const { t } = useTranslation();
  const values = t('about.values.items', { returnObjects: true });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {t('about.values.mission.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.values.mission.description')}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-accent mb-4">
              {t('about.values.vision.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.values.vision.description')}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('about.values.title')}
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center 
                  ${index % 3 === 0 ? 'bg-primary/10' : index % 3 === 1 ? 'bg-accent/10' : 'bg-secondary/10'}`}
                >
                  <span className={`text-2xl 
                    ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-accent' : 'text-secondary'}`}
                  >
                    {value.icon}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-4
                  ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-accent' : 'text-secondary'}`}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

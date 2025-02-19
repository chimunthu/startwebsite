import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';

const History = () => {
  const { t } = useTranslation();
  const timeline = t('about.history.timeline', { returnObjects: true });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with methodology description */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-primary mb-6">
            {t('about.history.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-accent mb-6">
                {t('about.history.methodologyTitle')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['arm', 'pocket','brain'].map((item) => (
                  <div key={item} className="text-center h-full">
                    <div className="bg-accent/10 p-6 rounded-xl h-full flex flex-col justify-between">
                      <h4 className="font-bold text-accent text-xl mb-3">
                        {t(`about.history.methodology.${item}.title`)}
                      </h4>
                      <p className="text-gray-600 flex-grow">
                        {t(`about.history.methodology.${item}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />

          {/* Timeline items */}
          <div className="space-y-32">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative">
                {/* Year marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image side - will be reordered based on index */}
                  <div className={`${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/10 hover:bg-primary/0 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Text side - will be reordered based on index */}
                  <div className={`${
                    index % 2 === 0 ? 'lg:order-2 lg:pl-16' : 'lg:order-1 lg:pr-16'
                  }`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

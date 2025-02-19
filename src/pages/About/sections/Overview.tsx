import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { logo } from '../../../assets/images';

const Overview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Start Space Workspace"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-6 rounded-2xl shadow-xl">
              <img
                src={logo}
                alt="Start Space Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-8">
              {t('about.overview.title')}
            </h2>
            <div className="space-y-6 text-gray-600">
              {t('about.overview.paragraphs', { returnObjects: true }).map((paragraph, index) => (
                <p 
                  key={index} 
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

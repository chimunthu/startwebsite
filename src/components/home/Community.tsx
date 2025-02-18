import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const Community = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('home.community.title')}
          </h2>
          <p className="text-xl mb-6">
            {t('home.community.subtitle')}
          </p>
          <p className="mb-8">
            {t('home.community.description')}
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full transition-colors">
            {t('home.community.joinButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;

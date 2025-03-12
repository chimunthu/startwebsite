import React from 'react';
import { Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const SocialConnect = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          {t('contact.social.title')}
        </h2>
        <p className="text-primary/90 mb-8 max-w-2xl mx-auto">
          {t('contact.social.description')}
        </p>
        
        <div className="flex justify-center gap-8">
          <a 
            href="#" 
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label={t('contact.social.links.facebook')}
          >
            <Facebook className="w-7 h-7 text-primary" />
          </a>
          <a 
            href="#" 
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7 text-primary" />
          </a>
          <a 
            href="https://wa.me/258123456789" 
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;

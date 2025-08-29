import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const LocationMap = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
          {t('contact.location.title')}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {t('contact.location.description')}
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-video rounded-t-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120909.57951335669!2d34.8083661!3d-19.8340047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f2a6af3c499fbc5%3A0xaca37575b95b456e!2sBeira%2C%20Mozambique!5e0!3m2!1sen!2sbr!4v1709669444611!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Start Space Beira
                </h3>
                <p className="text-gray-600">
                  {t('contact.info.address.line1')}
                </p>
                <p className="text-gray-600">
                  {t('contact.info.address.line2')}
                </p>
              </div>
            </div>
            
            <a
              href="https://maps.google.com/?q=Beira,Mozambique"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              <Navigation className="w-5 h-5" />
              {t('contact.location.directions')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

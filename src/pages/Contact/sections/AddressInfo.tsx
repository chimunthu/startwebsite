import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const AddressInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
          {t('contact.address.title')}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('contact.address.description')}
        </p>
      </div>

      {/* Address Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-7 h-7 text-blue-600" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
              {t('contact.info.address.title')}
            </h3>
            <div className="space-y-1 mb-4">
              <p className="text-gray-600 leading-relaxed">
                {t('contact.info.address.line1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('contact.info.address.line2')}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Beira,Mozambique"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
            >
              <Navigation className="w-4 h-4" />
              {t('contact.location.directions')}
            </a>
          </div>
        </div>
      </div>

      {/* Hours Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center">
            <Clock className="w-7 h-7 text-orange-600" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
              {t('contact.info.hours.title')}
            </h3>
            <div className="space-y-1">
              <p className="text-gray-600 leading-relaxed">
                {t('contact.info.hours.days')}
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                {t('contact.info.hours.time')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Us CTA */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary/90 rounded-2xl text-white">
        <div className="text-center">
          <h3 className="font-heading text-xl font-semibold mb-2">
            {t('contact.visit.title')}
          </h3>
          <p className="text-primary-100 mb-4">
            {t('contact.visit.description')}
          </p>
          <a
            href="https://maps.google.com/?q=Beira,Mozambique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors duration-300"
          >
            <MapPin className="w-5 h-5" />
            {t('contact.visit.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
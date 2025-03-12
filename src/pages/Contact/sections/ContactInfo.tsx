import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">{t('contact.info.address.title')}</h3>
                <p className="text-gray-600">{t('contact.info.address.line1')}</p>
                <p className="text-gray-600">{t('contact.info.address.line2')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">{t('contact.info.phone.title')}</h3>
                {(t('contact.info.phone.numbers') as string[]).map((number, index) => (
                  <p key={index} className="text-gray-600">{number}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">{t('contact.info.email.title')}</h3>
                {(t('contact.info.email.addresses') as string[]).map((email, index) => (
                  <p key={index} className="text-gray-600">{email}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-2">{t('contact.info.hours.title')}</h3>
                <p className="text-gray-600">{t('contact.info.hours.days')}</p>
                <p className="text-gray-600">{t('contact.info.hours.time')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

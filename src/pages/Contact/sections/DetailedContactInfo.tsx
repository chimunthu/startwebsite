import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

const DetailedContactInfo = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: MapPin,
      title: t('contact.info.address.title'),
      details: [
        t('contact.info.address.line1'),
        t('contact.info.address.line2')
      ],
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      action: null
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      details: (t('contact.info.phone.numbers') as string[]),
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      action: {
        label: 'Ligar Agora',
        href: 'tel:+258846165449'
      }
    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      details: (t('contact.info.email.addresses') as string[]),
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      action: {
        label: 'Enviar Email',
        href: 'mailto:info@start.co.mz'
      }
    },
    {
      icon: Clock,
      title: t('contact.info.hours.title'),
      details: [
        t('contact.info.hours.days'),
        t('contact.info.hours.time')
      ],
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      action: null
    }
  ];

  return (
    <div className="bg-white">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
          {t('contact.detailed.title')}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('contact.detailed.description')}
        </p>
      </div>

      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${method.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 text-white ${method.color.replace('bg-', 'text-')}`} />
                    <div className={`absolute w-14 h-14 ${method.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {method.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                    
                    {method.action && (
                      <a
                        href={method.action.href}
                        className={`inline-flex items-center px-4 py-2 ${method.color} text-white rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm font-medium`}
                      >
                        {method.action.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* WhatsApp Contact */}
      <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-semibold mb-1">
              {t('contact.whatsapp.title')}
            </h3>
            <p className="text-green-100">
              {t('contact.whatsapp.description')}
            </p>
          </div>
          <a
            href="https://wa.me/258846165449"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-6 py-3 rounded-xl font-medium hover:bg-green-50 transition-colors duration-300"
          >
            {t('contact.whatsapp.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailedContactInfo;
import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../../components/ui/Button';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-heading font-bold mb-6">
        {t('contact.form.title')}
      </h2>
      <p className="text-gray-600 mb-8">
        {t('contact.form.description')}
      </p>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.fields.name.label')}
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder={t('contact.form.fields.name.placeholder')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.fields.email.label')}
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder={t('contact.form.fields.email.placeholder')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.fields.subject.label')}
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder={t('contact.form.fields.subject.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.fields.message.label')}
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder={t('contact.form.fields.message.placeholder')}
          ></textarea>
        </div>

        <Button 
          variant="primary"
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 flex items-center justify-center gap-2"
        >
          {t('contact.form.button')}
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

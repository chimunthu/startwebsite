import React from 'react';
import Button from '../../../components/ui/Button';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-heading font-bold mb-6">Envie sua mensagem</h2>
      <p className="text-gray-600 mb-8">
        Ficamos felizes em saber que você está interessado no Start Space! 
        Preencha o formulário abaixo e entraremos em contato o mais breve possível.
      </p>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Assunto da mensagem"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Sua mensagem"
          ></textarea>
        </div>

        <Button 
          variant="primary"
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 flex items-center justify-center gap-2"
        >
          Enviar Mensagem
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

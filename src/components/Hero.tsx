import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-white pt-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Empreendedores trabalhando"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Transformando ideias em negócios de sucesso
          <span className="block text-blue-400">com valores do Reino de Deus</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Junte-se a uma comunidade de empreendedores comprometidos com a inovação
          e valores cristãos. Desenvolva seu negócio com mentoria, networking e
          recursos exclusivos.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 flex items-center">
            Saiba Mais
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
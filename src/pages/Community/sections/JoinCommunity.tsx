import React from 'react';
import Button from '../../../components/ui/Button';
import { ArrowRight } from 'lucide-react';

const JoinCommunity = () => {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-accent to-accent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">
            Faça Parte da Nossa Comunidade
          </h2>
          <p className="text-primary/90 mb-8 text-lg">
            Acreditamos que a construção de uma comunidade forte e colaborativa é fundamental 
            para o sucesso de qualquer empreendedor. Junte-se a nós e faça parte de uma 
            comunidade vibrante de inovadores em Beira, Moçambique e além.
          </p>
          <Button 
            variant="primary"
            className="bg-primary hover:bg-primary/90 text-white border-none text-lg px-12 py-4 inline-flex items-center gap-2"
          >
            Quero Fazer Parte
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
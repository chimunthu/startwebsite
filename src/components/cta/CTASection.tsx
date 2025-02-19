import React from 'react';
import Button from '../ui/Button';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Rocket className="h-16 w-16 text-accent mb-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Pronto para decolar sua startup?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mb-12">
            Junte-se a uma comunidade de empreendedores visionários e transforme 
            seu negócio com mentoria especializada e networking estratégico.
          </p>
          <Button 
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-primary border-none text-lg px-12 py-4 font-bold"
          >
            Comece Sua Jornada Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

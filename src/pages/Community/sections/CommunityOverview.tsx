import React from 'react';
import { Users } from 'lucide-react';

const CommunityOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb"
                alt="Community Meeting"
                className="relative rounded-3xl shadow-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-heading font-bold">Nossa Comunidade</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              No <span className="font-bold text-primary">Start Space</span>, estamos construindo uma comunidade vibrante e colaborativa de startups, empreendedores, mentores e parceiros de negócios. Nosso objetivo é fornecer um <span className="bg-primary/10 px-2 py-1 rounded">ambiente de suporte e crescimento</span> para todos os membros da nossa comunidade.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Estamos empenhados em impulsionar a inovação e o empreendedorismo em <span className="underline decoration-accent decoration-2">Beira, Moçambique e além</span>, criando um ecossistema próspero de negócios com propósito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityOverview;
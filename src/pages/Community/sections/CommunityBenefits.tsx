import React from 'react';
import { Network, Users, Lightbulb, HandshakeIcon } from 'lucide-react';
import BenefitAccordion from '../components/BenefitAccordion';

const benefits = [
  {
    icon: Network,
    title: 'Networking',
    description: 'Participe de eventos regulares exclusivos onde você poderá conectar-se com outros empreendedores, investidores e membros do ecossistema de inovação. Nossas atividades são projetadas para criar conexões significativas e duradouras.'
  },
  {
    icon: Users,
    title: 'Mentoria',
    description: 'Tenha acesso a mentores experientes em diversos setores que irão compartilhar conhecimentos valiosos e orientações práticas para ajudar você a superar desafios e acelerar o crescimento do seu negócio.'
  },
  {
    icon: Lightbulb,
    title: 'Recursos',
    description: 'Aproveite nossa biblioteca completa de ferramentas, treinamentos especializados e suporte administrativo dedicado para impulsionar sua startup. Oferecemos recursos práticos e atualizados para cada estágio do seu negócio.'
  },
  {
    icon: HandshakeIcon,
    title: 'Parcerias',
    description: 'Explore oportunidades únicas de colaboração com empresas e instituições em nossa rede global. Facilitamos conexões estratégicas que podem abrir portas para novos mercados e possibilidades de crescimento.'
  }
];

const CommunityBenefits = () => {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Benefícios da Nossa Comunidade
          </h2>
          <p className="text-gray-600">
            Como membro da comunidade do Start Space, você terá acesso a uma variedade 
            de recursos e oportunidades para impulsionar seu negócio.
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <BenefitAccordion
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityBenefits;

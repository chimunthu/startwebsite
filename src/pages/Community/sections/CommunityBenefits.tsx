import React from 'react';
import { Network, Users, Lightbulb, HandshakeIcon } from 'lucide-react';
import BenefitAccordion from '../components/BenefitAccordion';
import { useTranslation } from '../../../hooks/useTranslation';

const defaultBenefits = [
  {
    icon: Network,
    title: 'Networking',
    description: 'Participe de eventos regulares exclusivos onde você poderá conectar-se com outros empreendedores, investidores e membros do ecossistema de inovação.'
  },
  {
    icon: Users,
    title: 'Mentoria',
    description: 'Tenha acesso a mentores experientes em diversos setores que irão compartilhar conhecimentos valiosos e orientações práticas.'
  },
  {
    icon: Lightbulb,
    title: 'Recursos',
    description: 'Aproveite nossa biblioteca completa de ferramentas, treinamentos especializados e suporte administrativo dedicado para impulsionar sua startup.'
  },
  {
    icon: HandshakeIcon,
    title: 'Parcerias',
    description: 'Explore oportunidades únicas de colaboração com empresas e instituições em nossa rede global.'
  }
];

const CommunityBenefits = () => {
  const { t } = useTranslation();
  
  const benefitsData = t('community.benefits.items');
  const benefits = Array.isArray(benefitsData) ? benefitsData : defaultBenefits;

  const icons = {
    0: Network,
    1: Users,
    2: Lightbulb,
    3: HandshakeIcon,
  };

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {t('community.benefits.title')}
          </h2>
          <p className="text-gray-600">
            {t('community.benefits.description')}
          </p>
        </div>
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <BenefitAccordion
              key={index}
              icon={icons[index as keyof typeof icons]}
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

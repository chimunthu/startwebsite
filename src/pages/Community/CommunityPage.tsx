import React from 'react';
import InternalHero from '../../components/hero/InternalHero';
import CommunityOverview from './sections/CommunityOverview';
import CommunityBenefits from './sections/CommunityBenefits';
import JoinCommunity from './sections/JoinCommunity';

const CommunityPage = () => {
  return (
    <div className="bg-white">
      <InternalHero
        title="Nossa Comunidade"
        subtitle="Uma rede vibrante de empreendedores, mentores e inovadores unidos pelo propósito de transformar ideias em negócios de impacto."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998"
      />
      <CommunityOverview />
      <CommunityBenefits />
      <JoinCommunity />
    </div>
  );
};

export default CommunityPage;
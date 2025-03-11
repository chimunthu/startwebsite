import React from 'react';
import InternalHero from '../../components/hero/InternalHero';
import CommunityOverview from './sections/CommunityOverview';
import CommunityBenefits from './sections/CommunityBenefits';
import JoinCommunity from './sections/JoinCommunity';
import { useTranslation } from '../../hooks/useTranslation'; // updated import

const CommunityPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <InternalHero
        title={t('community.hero.title')}
        subtitle={t('community.hero.subtitle')}
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998"
      />
      <CommunityOverview />
      <CommunityBenefits />
      <JoinCommunity />
    </div>
  );
};

export default CommunityPage;

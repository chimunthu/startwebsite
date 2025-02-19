import { useTranslation } from '../../../hooks/useTranslation';
import InternalHero from '../../../components/hero/InternalHero';
import { aboutImages } from '../../../assets/images';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <InternalHero
      title={t('about.hero.title')}
      subtitle={t('about.hero.subtitle')}
      image={aboutImages.hero}
    />
  );
};

export default Hero;

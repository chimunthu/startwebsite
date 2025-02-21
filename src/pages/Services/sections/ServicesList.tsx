import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { Rocket, Download, Users, PiggyBank } from 'lucide-react';
import ServiceSection from '../components/ServiceSection';

const serviceIcons = {
  acceleration: Rocket,
  incubation: Download,
  networking: Users,
  investment: PiggyBank,
};

const serviceImages = {
  acceleration: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  incubation: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
  networking: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
  investment: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
};

const serviceKeys = ['acceleration', 'incubation', 'networking', 'investment'];

const ServicesList = () => {
  const { t } = useTranslation();

  const services = serviceKeys.map((key) => ({
    title: t(`services.${key}.title`),
    description: t(`services.${key}.description`),
    image: serviceImages[key as keyof typeof serviceImages],
    icon: serviceIcons[key as keyof typeof serviceIcons],
  }));

  return (
    <div>
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          {...service}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ServicesList;

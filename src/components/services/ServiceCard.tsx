import React from 'react';
import { LucideIcon } from 'lucide-react';
import Button from '../ui/Button';
import { useTranslation } from '../../hooks/useTranslation';

interface ServiceCardProps {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  buttonTextKey: string;
  onClick: () => void;
}

const ServiceCard = ({ icon: Icon, titleKey, descriptionKey, buttonTextKey, onClick }: ServiceCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-4">{t(titleKey)}</h3>
      <p className="text-gray-600 mb-6">{t(descriptionKey)}</p>
      <Button 
        variant="secondary" 
        onClick={onClick}
        className="w-full justify-center"
      >
        {t(buttonTextKey)}
      </Button>
    </div>
  );
};

export default ServiceCard;
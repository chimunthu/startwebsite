import React from 'react';
import { LucideIcon } from 'lucide-react';
import Button from '../ui/Button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const ServiceCard = ({ icon: Icon, title, description, buttonText, onClick }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button 
        variant="secondary" 
        onClick={onClick}
        className="w-full justify-center"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;
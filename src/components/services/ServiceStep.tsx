import React from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceIcon from './ServiceIcon';

interface ServiceStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceStep = ({ number, icon, title, description }: ServiceStepProps) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <ServiceIcon icon={icon} number={number} />
      <h3 className="font-heading font-bold text-xl mt-6 mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-gray-600 max-w-sm">{description}</p>
    </div>
  );
};

export default ServiceStep;

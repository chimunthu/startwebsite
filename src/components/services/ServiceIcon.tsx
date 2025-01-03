import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon: LucideIcon;
  number: number;
}

const ServiceIcon = ({ icon: Icon, number }: ServiceIconProps) => {
  return (
    <div className="relative group">
      <div className="absolute -top-4 -left-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
        <span className="text-accent font-heading font-bold">{number}</span>
      </div>
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-accent/20 transition-shadow">
        <Icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
      </div>
    </div>
  );
};

export default ServiceIcon;
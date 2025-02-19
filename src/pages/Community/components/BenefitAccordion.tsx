import React, { useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface BenefitAccordionProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitAccordion = ({ icon: Icon, title, description }: BenefitAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading text-xl font-bold text-left">{title}</h3>
        </div>
        <ChevronDown 
          className={`w-6 h-6 text-primary transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      
      <div 
        className={`px-6 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-48 py-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 pl-16">{description}</p>
      </div>
    </div>
  );
};

export default BenefitAccordion;

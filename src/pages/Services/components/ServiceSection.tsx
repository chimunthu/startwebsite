import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceSectionProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  isReversed?: boolean;
}

const ServiceSection = ({ title, description, image, icon: Icon, isReversed = false }: ServiceSectionProps) => {
  return (
    <section className={`py-24 ${isReversed ? 'bg-primary/5' : 'bg-accent/5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className={`absolute inset-0 ${isReversed ? 'bg-primary/20' : 'bg-accent/20'} rounded-3xl transform ${isReversed ? '-rotate-3' : 'rotate-3'}`}></div>
              <img
                src={image}
                alt={title}
                className="relative rounded-3xl shadow-xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 ${isReversed ? 'bg-primary/10' : 'bg-accent/10'} rounded-lg flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${isReversed ? 'text-primary' : 'text-accent'}`} />
              </div>
              <h2 className="text-3xl font-heading font-bold">{title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

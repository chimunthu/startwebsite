import React from 'react';

interface TimelineEventProps {
  year: number;
  title: string;
  description: string;
  image: string;
  align: 'left' | 'right';
}

const TimelineEvent = ({ year, title, description, image, align }: TimelineEventProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Content Side */}
      <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0">
        <div className={`text-center md:text-left ${align === 'right' ? 'md:text-left' : 'md:text-right'}`}>
          <span className="text-accent font-heading text-3xl font-bold">{year}</span>
          <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      {/* Timeline Dot - Hidden on mobile */}
      <div className="hidden md:block relative w-8 h-8 bg-primary rounded-full z-10 flex items-center justify-center">
        <div className="w-3 h-3 bg-accent rounded-full" />
      </div>
      
      {/* Image Side */}
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default TimelineEvent;
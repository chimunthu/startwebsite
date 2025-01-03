import React from 'react';
import StarRating from './StarRating';

interface TestimonialCardProps {
  image: string;
  name: string;
  role?: string;
  company?: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({
  image,
  name,
  role,
  company,
  testimonial,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/10"
        />
        <div>
          <h3 className="font-heading font-semibold text-gray-900">{name}</h3>
          {(role || company) && (
            <p className="text-sm text-gray-600">
              {role}
              {role && company && ' - '}
              {company}
            </p>
          )}
        </div>
      </div>
      
      <StarRating rating={rating} />
      
      <p className="mt-4 text-gray-600 line-clamp-3">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
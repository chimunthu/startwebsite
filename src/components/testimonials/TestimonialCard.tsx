import React from 'react';
import StarRating from './StarRating';
import { useTranslation } from '../../hooks/useTranslation';

interface TestimonialCardProps {
  image: string;
  index: number;
  rating: number;
}

const TestimonialCard = ({ image, index, rating }: TestimonialCardProps) => {
  const { t } = useTranslation();
  const testimonialData = t(`home.testimonials.items.${index}`);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={testimonialData.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/10"
        />
        <div>
          <h3 className="font-heading font-semibold text-gray-900">
            {testimonialData.name}
          </h3>
          <p className="text-sm text-gray-600">
            {testimonialData.role}
            {' - '}
            {testimonialData.company}
          </p>
        </div>
      </div>
      
      <StarRating rating={rating} />
      
      <p className="mt-4 text-gray-600 line-clamp-3">
        {testimonialData.text}
      </p>
    </div>
  );
};

export default TestimonialCard;
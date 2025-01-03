import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  title: string;
  icon: LucideIcon;
  content: string;
}

const ValueCard = ({ title, icon: Icon, content }: ValueCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-heading text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}

export default ValueCard;
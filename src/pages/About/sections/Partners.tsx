import React from 'react';
import PartnerLogo from '../components/PartnerLogo';

const partners = [
  {
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Innovation Hub',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Global Ventures',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Future Fund',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Kingdom Capital',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  },
  {
    name: 'Tech Accelerator',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9'
  }
];

const Partners = () => {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-bold text-center mb-16">
          Nossos Parceiros
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} {...partner} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/parceiros"
            className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold"
          >
            Ver Todos os Parceiros
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;

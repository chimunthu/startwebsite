import React from 'react';

interface PartnerLogoProps {
  name: string;
  logo: string;
}

const PartnerLogo = ({ name, logo }: PartnerLogoProps) => {
  return (
    <div className="group relative aspect-video flex items-center justify-center p-4">
      <img
        src={logo}
        alt={name}
        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default PartnerLogo;

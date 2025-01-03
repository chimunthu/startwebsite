import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-heading font-bold mb-6">Nossa Localização</h2>
      <div className="aspect-square rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120909.57951335669!2d34.8083661!3d-19.8340047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f2a6af3c499fbc5%3A0xaca37575b95b456e!2sBeira%2C%20Mozambique!5e0!3m2!1sen!2sbr!4v1709669444611!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
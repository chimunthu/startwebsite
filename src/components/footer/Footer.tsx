import React from 'react';
import { Rocket, Mail } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { socialLinks } from './socialData';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="bg-footer-bg text-footer-text pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          {/* Logo and Description */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 text-footer-accent" />
              <span className="ml-2 text-xl font-bold">START SPACE</span>
            </div>
            <p className="text-footer-text/80 max-w-xl mx-auto">
              {t('footer.description')}
            </p>
            <div className="flex justify-center space-x-6 mt-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-footer-text/80 hover:text-footer-accent transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-footer-text/60 text-sm">
          <p>
            {t('footer.copyright').replace('{year}', currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

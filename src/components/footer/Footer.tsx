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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <Rocket className="h-8 w-8 text-footer-accent" />
              <span className="ml-2 text-xl font-bold">START SPACE</span>
            </div>
            <p className="text-footer-text/80">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-footer-accent">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/sobre" className="text-footer-text/80 hover:text-footer-accent transition-colors">
                  {t('footer.quickLinks.about')}
                </a>
              </li>
              <li>
                <a href="/servicos" className="text-footer-text/80 hover:text-footer-accent transition-colors">
                  {t('footer.quickLinks.services')}
                </a>
              </li>
              <li>
                <a href="/contato" className="text-footer-text/80 hover:text-footer-accent transition-colors">
                  {t('footer.quickLinks.contact')}
                </a>
              </li>
              <li>
                <a href="/privacidade" className="text-footer-text/80 hover:text-footer-accent transition-colors">
                  {t('footer.quickLinks.privacy')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-footer-accent">
              {t('footer.newsletter.title')}
            </h3>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-2 rounded-l-md bg-white/10 border-white/20 text-white placeholder-white/50"
              />
              <button className="px-4 py-2 bg-footer-accent text-footer-bg rounded-r-md hover:bg-footer-accent/90 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
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

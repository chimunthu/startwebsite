import { useLanguage } from '../contexts/LanguageContext';
import pt from '../locales/pt.json';
import en from '../locales/en.json';

const translations = {
  pt,
  en,
};

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
      if (value?.[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      value = value[k];
    }

    return value;
  };

  return { t };
};
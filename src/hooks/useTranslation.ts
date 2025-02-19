import { useLanguage } from '../contexts/LanguageContext';
import pt from '../locales/pt.json';
import en from '../locales/en.json';

const translations = {
  pt,
  en,
};

type TranslationKey = string;
type TranslationValue = string | Record<string, any> | any[];

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key: TranslationKey): TranslationValue => {
    try {
      const keys = key.split('.');
      let value = translations[currentLanguage];

      for (const k of keys) {
        if (value?.[k] === undefined) {
          console.warn(`Translation key not found: ${key} in language: ${currentLanguage}`);
          return key;
        }
        value = value[k];
      }

      return value;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return key;
    }
  };

  return { t, currentLanguage };
};

import { format } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';

const locales = {
  en: enUS,
  pt: ptBR,
};

export const formatDate = (date: Date, language: string, formatStr: string = 'PP') => {
  return format(date, formatStr, {
    locale: locales[language] || enUS,
  });
};

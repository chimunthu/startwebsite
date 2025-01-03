const numberFormatters = {
  en: new Intl.NumberFormat('en-US'),
  pt: new Intl.NumberFormat('pt-BR'),
};

export const formatNumber = (number: number, language: string) => {
  return numberFormatters[language]?.format(number) || numberFormatters.en.format(number);
};
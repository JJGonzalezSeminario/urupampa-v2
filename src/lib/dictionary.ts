const dictionaries = {
  es: () => import('../dictionaries/es.json').then((module) => module.default),
  de: () => import('../dictionaries/de.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (lang: string) => {
  // Si el idioma no es de ni en, por defecto carga es
  const validLang = (lang === 'de' || lang === 'en') ? lang : 'es';
  return dictionaries[validLang]();
};
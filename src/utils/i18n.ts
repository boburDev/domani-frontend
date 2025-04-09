import en from '@/locales/en.json';
import uz from '@/locales/uz.json';
import ru from '@/locales/ru.json';

export const translations = {
  en,
  uz,
  ru,
};

export type Language = keyof typeof translations; 
export type Translations = typeof en;

export const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const lang = localStorage.getItem('lang');
    if (lang === 'uz' || lang === 'en' || lang === 'ru') return lang;
  }
  return 'en';
};

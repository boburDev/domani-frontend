'use client';

import { useLanguage } from './LanguageProvider';

const LanguageSwitcher = () => {
  const { language, changeLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'uz' : 'en';
    changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      {t.home} ({language.toUpperCase()})
    </button>
  );
};

export default LanguageSwitcher;

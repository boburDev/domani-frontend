import { useState, useEffect } from 'react';

const useLanguage = () => {
    const getStoredLanguage = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('language') || 'uz'; // Default language is 'uz'
        }
        return 'uz';
    };

    const [language, setLanguage] = useState<string>(getStoredLanguage);

    useEffect(() => {
        // When the language changes, store it in localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', language);
        }
    }, [language]);

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return {
        language,
        changeLanguage,
    };
};

export default useLanguage;

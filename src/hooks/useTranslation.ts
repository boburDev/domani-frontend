import { useEffect, useState } from 'react';

const useTranslation = (language: string) => {
    const [translations, setTranslations] = useState(null);

    useEffect(() => {
        if (!language) {
            console.error('Language not provided');
            return;
        }

        const loadTranslations = async () => {
            try {
                const response = await fetch(`/locales/${language}.json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch translation file');
                }
                const data = await response.json();
                console.log(data);
                setTranslations(data);
            } catch (error) {
                console.error('Error loading translation:', error);
            }
        };

        loadTranslations();
    }, [language]);

    return translations;
};

export default useTranslation;

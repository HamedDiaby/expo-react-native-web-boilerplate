import * as Localization from 'expo-localization';
import { useCallback, useMemo } from 'react';
import en from './locales/en.json';
import fr from './locales/fr.json';
import { TranslationKey, TranslationParams } from './types';

const DEFAULT_LANGUAGE = 'en';

// Fonction utilitaire pour récupérer une valeur nested par un path
const getNestedValue = (obj: Record<string, any>, path: string): any => {
  return path.split('.').reduce((current, key) => {
    return current?.[key];
  }, obj);
};

export const useTranslation = ()=> {

    const deviceLanguage = useMemo(() => {
        const locales = Localization.getLocales();
        if (locales && locales.length > 0) {
            // Extraire seulement la langue (ex: "fr-FR" → "fr")
            const language = locales[0].languageTag.split('-')[0];
            return language;
        }
        return DEFAULT_LANGUAGE;
    }, []);

    // Fonction pour obtenir les traductions selon la langue
    const getTranslations = useCallback(() => {
        if (deviceLanguage === 'fr') return fr;
        
        return en;
    }, [deviceLanguage]);

    const t = useCallback((key: TranslationKey, params?: TranslationParams) => {
        const translations = getTranslations();
        
        // Récupérer la traduction en utilisant la clé (qui peut être nested)
        let translation = getNestedValue(translations, key as string);
        
        // Si la traduction n'existe pas, retourner la clé comme fallback
        if (!translation) {
            translation = key as string;
        }
        
        // Remplacer les paramètres dans la traduction
        if (params && typeof translation === 'string') {
            return translation.replace(/\{(\w+)\}/g, (_, k) => {
                const value = params[k];
                return value !== undefined ? String(value) : `{${k}}`;
            });
        }
        
        return translation;
    }, [getTranslations]);

    return {
        t, DEFAULT_LANGUAGE, deviceLanguage
    };
}
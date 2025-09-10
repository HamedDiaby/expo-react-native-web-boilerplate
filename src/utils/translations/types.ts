import en from './locales/en.json';

// Type pour récupérer toutes les clés nested possibles
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// Type pour les clés de traduction (supporte les clés nested avec notation dot)
export type TranslationKey = NestedKeyOf<typeof en>;

// Type pour les paramètres de traduction
export interface TranslationParams {
  [key: string]: string | number | boolean;
}

// Type pour les traductions
export type Translations = typeof en;

// Fonction utilitaire pour créer des clés de traduction typées
export const createTranslationKey = <T extends TranslationKey>(key: T): T => key;
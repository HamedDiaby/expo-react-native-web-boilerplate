import Translation from '@utils/locales/fr.json';

export type TranslationType = typeof Translation;

function createEnumFromJsonKeys<T extends Record<string, string>>(keysObject: T): { [K in keyof T]: K } {
    const enumObject: any = {};
    for (const key in keysObject) {
        enumObject[key] = key;
    }
    return enumObject;
}

// Créer l'enum à partir du fichier JSON
export const TranslationKeysEnum:TranslationType = createEnumFromJsonKeys(Translation);

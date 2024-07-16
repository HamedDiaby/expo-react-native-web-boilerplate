export const enumToStringArray = <T extends string>(enumObject: { [key: string]: T }): T[] => {
    return Object.values(enumObject);
}

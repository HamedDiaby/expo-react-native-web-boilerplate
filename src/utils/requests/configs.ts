import { 
    FetchRequestType, 
    FetchResponseType,
} from '@utils/types';

// FR: Définit une fonction asynchrone pour effectuer des requêtes HTTP.
// EN: Defines an async function to perform HTTP requests.
export const fetchRequest = async ({
    route,           
    method,         
    accessToken,     
    data,           
}: FetchRequestType): Promise<FetchResponseType> => {

    const headers = {
        'Content-Type': 'application/json',
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` })
    };

    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_URL}${route}`, {
            method,
            headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {

            return {
                code: 500,
                data: response.statusText
            };
        }

        const responseData = await response.json();
        return {
            code: 200,
            data: responseData,
        };

    } catch (error: any) {
        return {
            code: 500,
            data: error.message || 'An error occurred'
        };
    }
}

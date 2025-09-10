import { ErrorType } from './error.type';

export type methodType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export interface FetchRequestType {
    route: string,
    method: keyof methodType,
    useAccessToken?: boolean,
    data?: any
    onChunk?   : (chunk: any) => void;
}

export type FetchResponseType = {
    code: number,
    data: any | ErrorType
}
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
    accessToken?: string,
    data?: any
}

// export type FetchResponseType = any | ErrorType

export type FetchResponseType = {
    code: number,
    data: any | ErrorType
}
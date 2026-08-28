import type {QueryParams} from "./QueryParams.ts";

interface RequestParams<T> {
    url: string;
    queryParams?: QueryParams;
    body?: T;
    getAuth?: () => string;
}

interface MethodParams<T> extends RequestParams<T> {
    method: RestMethod
}

type RestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type { RequestParams, MethodParams }

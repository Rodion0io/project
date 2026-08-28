import type {MethodParams, RequestParams} from "./types/RequestParams.ts";
import {buildUrl} from "./functions/buildUrl.ts";

export const createRequest = (baseUrl: string) => {

    const request = async <ReturnedType, BodyType = never>({ url, queryParams, body, getAuth, method }: MethodParams<BodyType>): Promise<ReturnedType> => {
        const prepairedUrl = buildUrl(baseUrl, url, queryParams);

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...(getAuth && { "Authorization": getAuth() })
        }

        const response = await fetch(prepairedUrl, { method: method, headers: headers, body: JSON.stringify(body) });

        if (!response.ok) {
            console.error(response.statusText);
        }

        return await response.json();
    }

    return {
        get: async <ReturnedType, BodyType = never>(params: RequestParams<BodyType>): Promise<ReturnedType> => {
            const result = await request<ReturnedType, BodyType>({ ...params, method: 'GET'})

            return result;
        },
        post: async <ReturnedType, BodyType>(params: RequestParams<BodyType>): Promise<ReturnedType> => {
            const result = await request<ReturnedType, BodyType>({ ...params, method: 'POST' })

            return result;
        },
        put: async <ReturnedType, BodyType>(params: RequestParams<BodyType>): Promise<ReturnedType> => {
            const result = await request<ReturnedType, BodyType>({ ...params, method: 'PUT' })

            return result;
        },
    }
}

import type {MethodParams, RequestParams} from "./types/RequestParams.ts";
import {buildUrl} from "./functions/buildUrl.ts";

export const createRequest = (baseUrl: string) => {

    const request = async <ReturnedType, T = never>({ url, queryParams, body, getAuth, method }: MethodParams<T>): Promise<ReturnedType> => {
        const prepairedUrl = buildUrl(baseUrl, url, queryParams);

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...(getAuth && { "Authorization": getAuth() })
        }

        const response = await fetch(prepairedUrl, { method: method, headers: headers, body: JSON.stringify(body) });

        if (!response.ok) {
            // Временно
            console.error(response.statusText)
        }

        return response.json()
    }

    return {
        get: async <ReturnedType, T = never>(params: RequestParams<T>): Promise<ReturnedType> => {
            const result = await request<ReturnedType, T>({ ...params, method: 'GET'})

            return result
        }
    }
}

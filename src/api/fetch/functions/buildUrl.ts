import type {QueryParams} from "../types/QueryParams.ts";

export const buildUrl = (baseUrl: string, url: string, queryParams?: QueryParams) => {
    let concatUrl = `${baseUrl}${url}`;

    if (!queryParams) {
        return concatUrl;
    }

    const query = new URLSearchParams();

    Object.entries(queryParams)
        .filter(([_, value]) => value !== null || value !== undefined || value !== '')
        .forEach(([key, value]) => query.set(key, String(value)));

    return `${concatUrl}?${query}`;
}

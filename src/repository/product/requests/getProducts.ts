import {fetchProductList} from "../../../api/fetchMethods/fetchProductList/fetchProductList.ts";

import {productMapper} from "../mapper/productMapper.ts";

import type {Product} from "../types/Product.ts";

export const getProducts = async (): Promise<Product[]> => {
    const { catalog } = await fetchProductList();

    return catalog.map((model) => productMapper(model));
}

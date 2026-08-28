import type {Product} from "../types/Product.ts";
import {pizzaInstance} from "../../../api/fetchInstances/pizzaInstance.ts";
import type {ProductApi} from "../types/ProductApi.ts";
import {productMapper} from "../mapper/productMapper.ts";

export const getProducts = async (): Promise<Product[]> => {
    const { catalog } = await pizzaInstance.get<ProductApi>({ url: "/pizzas/catalog" });

    return catalog.map((model) => productMapper(model));
}

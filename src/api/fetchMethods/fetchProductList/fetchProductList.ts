import {pizzaInstance} from "../../fetchInstances/pizzaInstance.ts";
import type {ProductApi} from "../../../repository/product/types/ProductApi.ts";

export const fetchProductList = async (): Promise<ProductApi> => {
    const response = await pizzaInstance.get<ProductApi>({ url: "/pizzas/catalog" });

    return response;
}

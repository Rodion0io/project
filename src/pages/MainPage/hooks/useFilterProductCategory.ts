import {useMemo} from "react";
import type {Product} from "../../../repository/product/types/Product.ts";
import type {Category} from "../../../repository/product/types/ProductApi.ts";

export const useFilterProductCategory = (products: Product[], category: Category) => {
    const result = useMemo(() => {
        return products.filter((products) => products.category === category)
    }, [products]);

    return result;
}

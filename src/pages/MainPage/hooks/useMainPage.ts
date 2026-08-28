import {useEffect, useState} from "react";
import type {Product} from "../../../repository/product/types/Product.ts";
import {getProducts} from "../../../repository/product/requests/getProducts.ts";
import {useFilterProductCategory} from "./useFilterProductCategory.ts";

export const useMainPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const request = async () => {
            const data = await getProducts();
            setProducts(data);
        }
        request();
    }, []);

    const pizzas = useFilterProductCategory(products, 'pizza');
    const breakfast = useFilterProductCategory(products, 'breakfast');
    const wings = useFilterProductCategory(products, 'wings');
    const milkshakes = useFilterProductCategory(products, 'milkshake');

    return {
        pizzas,
        breakfast,
        wings,
        milkshakes
    }
}

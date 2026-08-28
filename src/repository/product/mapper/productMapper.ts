import type {Catalog} from "../types/ProductApi.ts";
import type {Product} from "../types/Product.ts";
import {getBadgeText} from "../functions/getBadgeText.ts";
import {PIZZA_URL} from "../../../utils/constants/PIZZA_URL.ts";

export const productMapper = (product: Catalog): Product => ({
    id: product._id,
    img: `${PIZZA_URL}${product.img}`,
    name: product.name,
    price: product.sizes[0].price,
    category: product.category,
    badgeText: getBadgeText(product),
});

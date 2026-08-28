import type {Category} from "./ProductApi.ts";

interface Product {
    id: string;
    img: string;
    name: string
    price: number;
    category: Category;

    badgeText?: string;
}

export type { Product }

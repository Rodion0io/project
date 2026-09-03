import type {Category, Ingredients, Options, Sizes} from "./ProductApi.ts";

interface Product {
    id: string;
    img: string;
    name: string
    price: number;
    category: Category;
    description: string;
    ingredients: Ingredient[];
    sizes: Size[];
    options: Option[];

    badgeText?: string;
}

type Ingredient = Omit<Ingredients, 'price'> & {
    price: string;
}

type Size = Omit<Sizes, 'type' | 'price'> & {
    type: string;
    price: string;
}

type Option = Omit<Options, 'price'> & {
    price: string;
}

export type { Product, Ingredient, Size, Option };

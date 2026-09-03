interface ModalProduct {
    id: string;
    name: string;
    description: string;
    img: string;
    ingredients: Ingredient[];
    sizes: Size[];
    options: Option[];
}

interface Ingredient {
    type: string;
    price: number;
    img: string;
}

interface Size {
    type: SizeType;
    price: number;
    volume: number;
}

type SizeType = "small" | "medium" | "large";

interface Option {
    type: string;
    price: number;
}

export type { ModalProduct, Ingredient }

interface ProductApi {
    success: boolean;
    catalog: Catalog[];
}

interface Catalog {
    _id: string;
    category: Category;
    name: string;
    ingredients: Ingredients[];
    description: string;
    sizes: Sizes[];
    options: Options[];
    calories: number;
    protein: string;
    totalFat: string;
    carbohydrates: string;
    sodium: string;
    allergens: string[];
    isVegetarian: boolean;
    isGlutenFree: boolean;
    isNovelty: boolean;
    isHit: boolean;
    img: string;
}

interface Ingredients {
    type: string;
    price: number;
    img: string;
}

interface Sizes {
    type: SizeType;
    price: number;
    volume: number;
}

interface Options {
    type: string;
    price: number;
}

type Category = 'pizza' | 'breakfast' | 'wings' | 'milkshake';
type SizeType = "small" | "medium" | "large";

export type { ProductApi, Catalog, Category, Ingredients, Sizes, Options, SizeType };

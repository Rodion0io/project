import type {Ingredient} from "../../../../../repository/product/types/Product.ts";

interface IngredientCardProps extends Ingredient{
    onSelect: (type: string) => void;

    className?: string;
    isSelected?: boolean;
}

export type { IngredientCardProps };

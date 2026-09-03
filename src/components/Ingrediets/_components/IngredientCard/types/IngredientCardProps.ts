import type {Ingredient} from "../../../../../repository/product/types/ModalProduct.ts";

interface IngredientCardProps extends Ingredient{
    onSelect: (type: string) => void;

    className?: string;
    isSelected?: boolean;
}

export type { IngredientCardProps };

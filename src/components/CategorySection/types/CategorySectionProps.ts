import type {Product} from "../../../repository/product/types/Product.ts";

interface CategorySectionProps {
    sectionTitle: string;
    products: Product[]
}

export type { CategorySectionProps };

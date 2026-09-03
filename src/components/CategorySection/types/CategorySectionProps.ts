import type {Product} from "../../../repository/product/types/Product.ts";

interface CategorySectionProps {
    sectionTitle: string;
    products: Product[]
    onProductOpen: (id: string) => void;
}

export type { CategorySectionProps };

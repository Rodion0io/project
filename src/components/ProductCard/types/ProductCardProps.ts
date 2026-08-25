import type {Product} from "../../../repository/product/types/Product.ts";

interface ProductCardProps extends Pick<Product, 'img' | 'name' | 'price' | 'badgeText'>{
    onOpen: () => void;

    className?: string;
}

export type { ProductCardProps }

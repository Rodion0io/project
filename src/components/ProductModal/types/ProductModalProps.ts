import type {Product} from "../../../repository/product/types/Product.ts";

interface ProductModalProps extends Pick<Product, 'id' | 'name' | 'description' | 'img' | 'ingredients' | 'sizes' | 'options'> {
    closeModal: () => void;
}

export type { ProductModalProps }

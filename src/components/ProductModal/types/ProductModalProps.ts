import type {ModalProduct} from "../../../repository/product/types/ModalProduct.ts";

interface ProductModalProps extends ModalProduct {
    closeModal: () => void;
}

export type { ProductModalProps }

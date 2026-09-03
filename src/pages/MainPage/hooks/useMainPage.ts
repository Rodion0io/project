import {useEffect, useState} from "react";
import type {Product} from "../../../repository/product/types/Product.ts";
import {getProducts} from "../../../repository/product/requests/getProducts.ts";
import {useFilterProductCategory} from "./useFilterProductCategory.ts";
import {useModal} from "../../../components/ui/Modal/useModal.ts";

export const useMainPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [modalProduct, setModalProduct] = useState<Product>();
    const [selectedProductModal, setSelectedProductModal] = useState<string | undefined>();
    const { modalOpen, changeModalState } = useModal()

    const select = (id: string) => {
        setSelectedProductModal(id);
    }

    useEffect(() => {
        const request = async () => {
            const data = await getProducts();
            setProducts(data);
        }
        request();
    }, []);

    useEffect(() => {
        if (selectedProductModal === undefined) return;

        setModalProduct(products.find((product) => product.id === selectedProductModal));
        changeModalState()

    }, [selectedProductModal]);

    const pizzas = useFilterProductCategory(products, 'pizza');
    const breakfast = useFilterProductCategory(products, 'breakfast');
    const wings = useFilterProductCategory(products, 'wings');
    const milkshakes = useFilterProductCategory(products, 'milkshake');

    return {
        pizzas,
        breakfast,
        wings,
        milkshakes,
        modalProduct,
        modalOpen,
        changeModalState,
        select,
    }
}

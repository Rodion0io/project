import {MenuToolbar} from "../../components/MenuToolbar/MenuToolbar.tsx";
import {CategorySection} from "../../components/CategorySection/CategorySection.tsx";
import {ProductModal} from "../../components/ProductModal/ProductModal.tsx";
import {Modal} from "../../components/ui/Modal/Modal.tsx";

import {useMainPage} from "./hooks/useMainPage.ts";

export const MainPage = () => {

    const {
        pizzas,
        breakfast,
        wings,
        milkshakes,
        modalProduct,
        modalOpen,
        changeModalState,
        select,
    } = useMainPage()

    return (
        <>
            <MenuToolbar/>
            <CategorySection
                sectionTitle="Пицца"
                products={pizzas}
                onProductOpen={select}
            />
            <CategorySection
                sectionTitle="Завтраки"
                products={breakfast}
                onProductOpen={select}
            />
            <CategorySection
                sectionTitle="Крылышки"
                products={wings}
                onProductOpen={select}
            />
            <CategorySection
                sectionTitle="Милкшейки"
                products={milkshakes}
                onProductOpen={select}
            />
            {modalProduct &&
                <Modal isOpen={modalOpen} setIsOpen={changeModalState}>
                    <ProductModal
                        id={modalProduct.id}
                        closeModal={changeModalState}
                        name={modalProduct.name}
                        description={modalProduct.description}
                        img={modalProduct.img}
                        ingredients={modalProduct.ingredients}
                        sizes={modalProduct.sizes}
                        options={modalProduct.options}
                    />
                </Modal>
            }
        </>
    )
}

import st from "./ProductModal.module.scss";

import type {ProductModalProps} from "./types/ProductModalProps.ts";

import {Box} from "../ui/Box/Box.tsx";
import {Button} from "../ui/Button/Button.tsx";
import {Text} from "../ui/Text/Text.tsx";
import {Ingredients} from "../Ingrediets/Ingredients.tsx";

export const ProductModal = (props: ProductModalProps) => {

    const {
        closeModal,
        name,
        description,
        img,
        ingredients,
        sizes,
        options
    } = props;

    return (
        <Box
            flexDirection="row"
            gap="24"
        >
            <Box
                alignItems="center"
                justifyContent="center"
                className={st.productPhotoContainer}
            >
                <img
                    src={img}
                    alt="pizzaPhoto"
                    className={st.productPhoto}
                />
            </Box>
            <Box
                flexDirection="column"
                gap="24"
                className={st.productInformation}
            >
                <Box
                    flexDirection="column"
                    gap="8"
                >
                    <Text
                        weight="600"
                        size="24"
                    >
                        {name}
                    </Text>
                    <Text
                        weight="400"
                        size="14"
                        className={st.descriptionText}
                    >
                        {sizes[0].type}, {options[0].type}
                    </Text>
                    <Text
                        size="16"
                        weight="400"
                    >
                        {description}
                    </Text>
                </Box>
                <Ingredients ingredients={ingredients}/>
                <Button
                    onClick={closeModal}
                    className={st.button}
                >
                    <Text
                        weight="400"
                        size="14"
                    >
                        Добавить
                    </Text>
                </Button>
            </Box>
        </Box>
    )
}

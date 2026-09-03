import st from "./Ingredients.module.scss";

import type {IngredientsProps} from "./types/IngredientsProps.ts";

import {Box} from "../ui/Box/Box.tsx";
import {Text} from "../ui/Text/Text.tsx";
import {IngredientCard} from "./_components/IngredientCard/IngredientCard.tsx";

import {useIngredients} from "./useIngredients.ts";

export const Ingredients = (props: IngredientsProps) => {

    const { ingredients } = props
    const { selectedIngredients, selectValue } = useIngredients();

    return (
        <Box
            gap="8"
            flexDirection="column"
        >
            <Text
                weight="600"
                size="24"
            >
                Добавить по вкусу
            </Text>
            <Box
                className={st.ingredientsBlock}
                flexWrap="wrap"
                gap="12"
            >
                {ingredients.map((item) => (
                    <IngredientCard
                        key={item.type}
                        type={item.type}
                        price={item.price}
                        img={item.img}
                        isSelected={selectedIngredients.includes(item.type)}
                        onSelect={selectValue}
                    />
                ))}
            </Box>
        </Box>
    )
}

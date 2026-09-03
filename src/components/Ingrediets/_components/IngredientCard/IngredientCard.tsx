import type {IngredientCardProps} from "./types/IngredientCardProps.ts";
import {Box} from "../../../ui/Box/Box.tsx";
import {Text} from "../../../ui/Text/Text.tsx";
import clsx from "clsx";
import st from "./IngredientCard.module.scss";
import {Icon} from "../../../ui/Icon/Icon.tsx";

export const IngredientCard = (props: IngredientCardProps) => {

    const {
        className,
        isSelected,
        onSelect,
        type,
        price,
        img
    } = props

    // временно
    console.log(onSelect)

    return (
        <Box
            flexDirection="column"
            gap="24"
            alignItems="center"
            className={
                clsx(
                    st.root,
                    className,
                    (isSelected && st['root_selected'])
                )
            }
        >
            {isSelected && <Icon type="checkmark" className={st.icon}/>}
            <Box
                flexDirection="column"
                alignItems="center"
            >
                <img src={img} className={st.photo}/>
                <Text
                    weight="400"
                    size="14"
                >
                    {type}
                </Text>
            </Box>
            <Text
                weight="600"
                size="14"
            >
                {price}
            </Text>
        </Box>
    )
}

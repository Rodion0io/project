import st from "./ProductCard.module.scss";

import {Box} from "../ui/Box/Box.tsx";
import {Text} from "../ui/Text/Text.tsx";
import {Icon} from "../ui/Icon/Icon.tsx";
import {Badge} from "../ui/Badge/Badge.tsx";

import type {ProductCardProps} from "./types/ProductCardProps.ts";

import clsx from "clsx";

export const ProductCard = (props: ProductCardProps) => {

    const {
        img,
        name,
        price,
        className,
        badgeText,
        onOpen,
    } = props

    return (
        <Box
            className={clsx(className, st.root)}
            flexDirection="column"
            gap="12"
            alignItems="center"
        >
            <Box
                className={st.photoContainer}
            >
                {(badgeText !== undefined) &&
                    <Badge
                        className={st.badge}
                    >
                        <Text
                            weight="600"
                            size="12"
                        >
                            {badgeText}
                        </Text>
                    </Badge>
                }
                <img
                    src={img}
                    alt="pizzaPhoto"
                    className={st.productPhoto}
                />
            </Box>
            <Text
                weight="600"
                size="20"
                className={st.productName}
            >
                {name}
            </Text>
            <Box
                flexDirection="row"
                alignItems="center"
                justifyContent="spaceAround"
                className={st.priceBlock}
            >
                <Text
                    weight="400"
                    size="14"
                >
                    {`от ${price} ₽`}
                </Text>
                <Icon
                    type="plus"
                    className={st.icon}
                    onClick={onOpen}
                />
            </Box>
        </Box>
    )
}

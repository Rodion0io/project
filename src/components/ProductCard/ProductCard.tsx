import st from "./ProductCard.module.scss";

import type {ProductCardProps} from "./types/ProductCardProps.ts";
import {Box} from "../ui/Box/Box.tsx";
import clsx from "clsx";
import {Text} from "../ui/Text/Text.tsx";
import {Icon} from "../ui/Icon/Icon.tsx";
import {Badge} from "../ui/Badge/Badge.tsx";

export const ProductCard = (props: ProductCardProps) => {

    const {
        img,
        name,
        price,
        className,
        badgeText,
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
                <Icon type="plus" className={st.icon}/>
            </Box>
        </Box>
    )
}

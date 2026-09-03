import type {CategorySectionProps} from "./types/CategorySectionProps.ts";
import {Box} from "../ui/Box/Box.tsx";
import {Text} from "../ui/Text/Text.tsx";
import {ProductCard} from "../ProductCard/ProductCard.tsx";

export const CategorySection = (props: CategorySectionProps) => {

    const {
        sectionTitle,
        products,
        onProductOpen
    } = props;

    return (
        <Box
            flexDirection="column"
            gap="24"
        >
            <Text
                weight="800"
                size="32"
            >
                {sectionTitle}
            </Text>
            <Box
                flexWrap="wrap"
                gap="32"
            >
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        onOpen={() => onProductOpen(item.id)}
                        {...item}
                    />
                ))}
            </Box>
        </Box>
    )
};

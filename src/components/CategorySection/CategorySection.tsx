import type {CategorySectionProps} from "./types/CategorySectionProps.ts";
import {Box} from "../ui/Box/Box.tsx";
import {Text} from "../ui/Text/Text.tsx";
import {ProductCard} from "../ProductCard/ProductCard.tsx";

export const CategorySection = (props: CategorySectionProps) => {

    const {
        sectionTitle,
        products
    } = props;

    const testCallback = () => console.log('123')

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
                        onOpen={testCallback}
                        {...item}
                    />
                ))}
            </Box>
        </Box>
    )
};

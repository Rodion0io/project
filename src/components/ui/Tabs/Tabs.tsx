import type {TabsProps} from "./types/TabsProps.ts";

import {Box} from "../Box/Box.tsx";
import {Button} from "../Button/Button.tsx";
import {Text} from "../Text/Text.tsx";

export const Tabs = (props: TabsProps) => {

    const {
        items,
        selectedValue,
        onChange,
        className,
    } = props;

    return (
        <Box
            className={className}
            alignItems="center"
            gap="8"
        >
            {items.map((item) => (
                <Button
                    size="lg"
                    color={selectedValue === item.id ? 'black' : 'grey'}
                    key={item.id}
                    onClick={() => onChange(item.id)}
                >
                    <Text
                        weight="600"
                        size="20"
                    >
                        {item.value}
                    </Text>
                </Button>
            ))}
        </Box>
    )
}

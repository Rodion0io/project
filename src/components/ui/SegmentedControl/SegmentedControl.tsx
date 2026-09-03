import st from "./SegmentedControl.module.scss";

import type {SegmentedControlProps} from "./types/SegmentedControlProps.ts";

import {Box} from "../Box/Box.tsx";
import {Button} from "../Button/Button.tsx";

import clsx from "clsx";
import {useSegmentedControl} from "./useSegmentedControl.ts";
import {Text} from "../Text/Text.tsx";

export const SegmentedControl = (props: SegmentedControlProps) => {

    const {
        values,
        className,
        currentValue,
        changeValue
    } = useSegmentedControl(props);

    return (
        <Box
            className={clsx(className, st.root)}
        >
            {values.map((item) => (
                <Button
                    key={item.key}
                    onClick={() => changeValue(item.key)}
                    color={item.key === currentValue ? "white" : "grey"}
                >
                    <Text
                        weight="800"
                        size="18"
                    >
                        {item.value}
                    </Text>
                </Button>
            ))}
        </Box>
    )
}

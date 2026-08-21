import st from "./Badge.module.scss";

import type {BadgeProps} from "./types/BadgeProps.ts";
import {Box} from "../Box/Box.tsx";
import clsx from "clsx";

export const Badge = (props: BadgeProps) => {

    const {
        children,
        className,
        size = 'md',
        color = 'orange',
    } = props

    return (
        <Box
            className={
            clsx(
                st.root,
                className,
                st[`root_size_${size}`],
                st[`root_color_${color}`],
            )}
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Box>
    )
}

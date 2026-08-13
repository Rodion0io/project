import st from "./Text.module.scss"

import type {TextProps} from "./types/TextProps.ts";
import clsx from "clsx";

export const Text = (props: TextProps) => {

    const {
        children,
        className,
        size = '20',
        weight = '400',
    } = props

    return (
        <span
            className={
                clsx(
                    className,
                    st[`root_fontSize_${size}`],
                    st[`root_fontWeight_${weight}`],
                )
            }
        >
            {children}
        </span>
    )
}

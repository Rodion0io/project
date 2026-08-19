import st from "./Button.module.scss";
import type {ButtonProps} from "./types/ButtonProps.ts";

import clsx from "clsx";

export const Button = (props: ButtonProps) => {

    const {
        children,
        className,
        size = 'md',
        variant = 'primary',
        color = 'orange',
        onClick,
        disabled = false
    } = props

    return (
        <button
            className={clsx(
                className,
                st.root,
                st[`root_${color}`],
                st[`root_${variant}`],
                st[`root_${size}`],
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

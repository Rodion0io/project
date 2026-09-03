import st from "./Box.module.scss"

import type {BoxProps} from "./types/BoxProps.ts";

import clsx from "clsx";

export const Box = (props: BoxProps) => {

    const {
        children,
        className,
        flexDirection = 'row',
        justifyContent = 'normal',
        alignItems = 'stretch',
        flexWrap = 'nowrap',
        gap = '2',
        onClick,
    } = props

    return (
        <div
            onClick={onClick}
            className={
                clsx(
                    st.root,
                    className,
                    st[`root_flexDirectionType_${flexDirection}`],
                    st[`root_justifyContentType_${justifyContent}`],
                    st[`root_alignItemsType_${alignItems}`],
                    st[`root_flexWrapType_${flexWrap}`],
                    st[`root_gapType_${gap}`],
                )
            }
        >
            {children}
        </div>
    )
}

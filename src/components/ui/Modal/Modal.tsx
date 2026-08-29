import st from "./Modal.module.scss";

import type {ModalProps} from "./types/ModalProps.ts";
import {Box} from "../Box/Box.tsx";
import clsx from "clsx";
import {createPortal} from "react-dom";
import {Icon} from "../Icon/Icon.tsx";

export const Modal = (props: ModalProps) => {

    const { className, isOpen, children } = props

    if (!isOpen) return null;

    return createPortal(
        <Box
            className={clsx(st.root, className)}
            alignItems="center"
            justifyContent="center"
        >
            <Box
                className={st.wrapper}
                flexDirection="column"
            >
                <Box
                    className={st.header}
                    justifyContent="flexEnd"
                    alignItems="center"
                >
                    <Icon type="cross" className={st.icon}/>
                </Box>
                {children}
            </Box>
        </Box>,
        document.body
    )
}

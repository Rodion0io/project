import st from "./User.module.scss";

import {User} from "./Icons/User.tsx";
import {Clock} from "./Icons/Clock.tsx";
import {ChevronDown} from "./Icons/ChevronDown.tsx";

import type {IconProps} from "./types/IconProps.ts";

import clsx from "clsx";
import {Basket} from "./Icons/Basket.tsx";
import {Plus} from "./Icons/Plus.tsx";
import {Cross} from "./Icons/Cross.tsx";
import {Checkmark} from "./Icons/Checkmark.tsx";

export const Icon = (props: IconProps) => {

    const { type, className } = props

    return {
        user: <User className={clsx(st.root, className)}/>,
        clock: <Clock className={clsx(st.root, className)}/>,
        chevronDown: <ChevronDown className={clsx(st.root, className)}/>,
        basket: <Basket className={clsx(st.root, className)}/>,
        plus: <Plus className={clsx(st.root, className)}/>,
        cross: <Cross className={clsx(st.root, className)}/>,
        checkmark: <Checkmark className={clsx(st.root, className)}/>,
    }[type]
}

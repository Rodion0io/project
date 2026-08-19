import st from "./User.module.scss";

import {User} from "./Icons/User.tsx";
import {Clock} from "./Icons/Clock.tsx";
import {ChevronDown} from "./Icons/ChevronDown.tsx";

import type {IconProps} from "./types/IconProps.ts";

import clsx from "clsx";

export const Icon = (props: IconProps) => {

    const { type, className } = props

    return {
        user: <User className={clsx(st.root, className)}/>,
        clock: <Clock className={clsx(st.root, className)}/>,
        chevronDown: <ChevronDown className={clsx(st.root, className)}/>
    }[type]
}

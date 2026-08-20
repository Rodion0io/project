import st from "./MenuToolbar.module.scss"

import {Box} from "../ui/Box/Box.tsx";
import type {MenuToolbarProps} from "./types/MenuToolbarProps.ts";
import {Tabs} from "../ui/Tabs/Tabs.tsx";
import {Button} from "../ui/Button/Button.tsx";
import type {TabsProps} from "../ui/Tabs/types/TabsProps.ts";
import {useState} from "react";
import {Icon} from "../ui/Icon/Icon.tsx";

export const MenuToolbar = (props: MenuToolbarProps) => {

    const { className } = props

    const [state, setState] = useState<TabsProps>({
        items: [
            { id: '1', value: 'Пиццы' },
            { id: '2', value: 'Завтраки' },
            { id: '3', value: 'Крылышки' },
            { id: '4', value: 'Милкшейки' },
        ],
        selectedValue: '1',
    })

    function handleChange(value: string){
        setState((prevState) => ({...prevState, selectedValue: value}));
    }

    return (
        <Box
            className={className}
            alignItems="center"
            justifyContent="spaceBetween"
        >
            <Tabs items={state.items} selectedValue={state.selectedValue} onChange={handleChange}/>
            <Button
                size="lg"
            >
                <Icon
                    type="basket"
                    className={st.icon}
                />
                Корзина
            </Button>
        </Box>
    )
}

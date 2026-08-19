import st from "./Header.module.scss"

import {Box} from "../../../ui/Box/Box.tsx";
import {Text} from "../../../ui/Text/Text.tsx";

import pizza from "../../../../../src/assets/pizza.png";

import {Link} from "react-router";
import {Button} from "../../../ui/Button/Button.tsx";
import {Icon} from "../../../ui/Icon/Icon.tsx";
import clsx from "clsx";

export const Header = () => {

    return (
        <Box
            className={st.root}
            justifyContent="spaceBetween"
            alignItems="center"
        >
            <Link to="/">
                <Box
                    gap="4"
                    alignItems="center"
                >
                    <img src={pizza} alt="Pizza"/>
                    <Text
                        size='16'
                        weight='800'
                        className={st.textLogo}
                    >
                        PIZZA
                    </Text>
                </Box>
            </Link>
            <Box
                gap="16"
                alignItems="center"
            >
                <Box
                    gap="8"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text
                        weight="400"
                        size="14"
                    >
                        Укажите адрес доставки
                    </Text>
                    <Icon
                        type="chevronDown"
                        className={clsx(st.icon, st.chevron)}
                    />
                </Box>
                <Button
                    size="sm"
                    variant="secondary"
                    color="grey"
                >
                    <Icon
                        type="clock"
                        className={st.icon}
                    />
                </Button>
                <Button
                    size="sm"
                    variant="secondary"
                    color="grey"
                >
                    <Icon
                        type="user"
                        className={st.icon}
                    />
                </Button>
                <Button
                    variant="secondary"
                >
                    Войти
                </Button>
            </Box>
        </Box>
    )
}

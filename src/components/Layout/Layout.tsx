import st from "./Layout.module.scss";

import {Outlet} from "react-router";
import {Header} from "./_components/Header/Header.tsx";
import {Box} from "../ui/Box/Box.tsx";

export const Layout = () => {

    return (
        <Box className={st.root} flexDirection="column" gap="8">
            <Header/>
            <Outlet/>
        </Box>
    )
}

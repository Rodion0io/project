import {Route, Routes} from "react-router";
import {MainPage} from "../../pages/MainPage/MainPage.tsx";

export const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<MainPage/>}/>
            </Route>
            <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
    )
}

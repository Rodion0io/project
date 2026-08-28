import {MenuToolbar} from "../../components/MenuToolbar/MenuToolbar.tsx";
import {useMainPage} from "./hooks/useMainPage.ts";
import {CategorySection} from "../../components/CategorySection/CategorySection.tsx";

export const MainPage = () => {

    const {
        pizzas,
        breakfast,
        wings,
        milkshakes
    } = useMainPage()

    return (
        <>
            <MenuToolbar/>
            <CategorySection sectionTitle="Пицца" products={pizzas}/>
            <CategorySection sectionTitle="Завтраки" products={breakfast}/>
            <CategorySection sectionTitle="Крылышки" products={wings}/>
            <CategorySection sectionTitle="Милкшейки" products={milkshakes}/>
        </>
    )
}

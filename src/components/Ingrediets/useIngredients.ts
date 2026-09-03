import {useState} from "react";

export const useIngredients = () => {

    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

    const selectValue = (type: string) => {
        if (selectedIngredients.includes(type)) {
            setSelectedIngredients((prevState) => prevState.filter((item) => item !== type));
        }
        else {
            setSelectedIngredients((prevState) => [...prevState, type]);
        }
    }

    return {
        selectedIngredients,
        selectValue
    }
}

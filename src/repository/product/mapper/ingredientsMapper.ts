import type {Ingredients} from "../types/ProductApi.ts";
import {PIZZA_URL} from "../../../utils/constants/PIZZA_URL.ts";
import type {Ingredient} from "../types/Product.ts";

export const ingredientsMapper = (ingredients: Ingredients): Ingredient => ({
    type: ingredients.type,
    price: `${ingredients.price} ₽`,
    img: `${PIZZA_URL}/${ingredients.img}`
})

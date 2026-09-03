import type {Options} from "../types/ProductApi.ts";
import type {Option} from "../types/Product.ts";

export const optionsMapper = (options: Options): Option => ({
    type: options.type,
    price: `${options.price} ₽`,
})

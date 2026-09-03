import type {Sizes, SizeType} from "../types/ProductApi.ts";
import type {Size} from "../types/Product.ts";

const SIZE_TRANSLATE: Record<SizeType, string> = {
    'small': 'маленькая',
    'medium': 'средняя',
    'large': 'большая'
} as const;

export const sizesMapper = (sizes: Sizes): Size => ({
    type: SIZE_TRANSLATE[sizes.type],
    price: `${sizes.price} ₽`,
    volume: sizes.volume,
})

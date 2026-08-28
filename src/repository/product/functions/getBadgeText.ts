import type {Catalog} from "../types/ProductApi.ts";

export const getBadgeText = (product: Catalog) => {
    if (product.isVegetarian) {
        return "веган"
    }
    else if (product.isGlutenFree) {
        return "безглютеновый"
    }
    else if (product.isNovelty) {
        return "новинка"
    }
    else if (product.isHit) {
        return "хит"
    }
    return undefined;
}

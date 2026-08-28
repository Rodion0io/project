import {createRequest} from "../fetch/request.ts";
import {PIZZA_URL} from "../../utils/constants/PIZZA_URL.ts";

export const pizzaInstance = createRequest(PIZZA_URL);

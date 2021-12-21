import { combineReducers } from "redux";
import { cartReducers } from "./cartReducers";


export const rootReducer = combineReducers({
    cart: cartReducers,
});

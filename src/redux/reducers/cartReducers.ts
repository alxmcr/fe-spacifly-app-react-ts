import { CartLaunchesAction, CartLaunchesState } from "../../@types/appReduxTypes";
import { Launch } from "../../@types/appTypes";

export const initialCartLaunches: CartLaunchesState = {
    cart: []
}

export const cartReducers = (
    state: CartLaunchesState = initialCartLaunches,
    action: CartLaunchesAction
) => {
    switch (action.type) {
        case "cart/launch/add":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "cart/launch/remove":
            const launchToRemove = action.payload as Launch;
            const condition = (launch: Launch) => launch.id !== launchToRemove.id;
            return {
                ...state,
                cart: state.cart.filter(condition)
            }
        case "cart/launch/clear":
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}
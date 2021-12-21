import { StoreEnhancer } from "redux";
import { Launch } from "./appTypes";

export interface CartLaunchesState {
    cart: Launch[]
}

export interface CartLaunchesAction {
    type: "cart/launch/add" | "cart/launch/remove" | "cart/launch/clear";
    payload: Launch | {};
}

export type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>
}

export interface AppReduxProviderProps {
    children: React.ReactNode;
}

export interface AppReduxState {
    cart: CartLaunchesState,
}
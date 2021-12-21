import { CartLaunchesAction } from "../../@types/appReduxTypes";
import { Launch } from "../../@types/appTypes";

export const addLaunch = (launch: Launch): CartLaunchesAction => {
    return {
        type: "cart/launch/add",
        payload: launch
    };
}

export const removeLaunch = (launch: Launch): CartLaunchesAction => {
    return {
        type: "cart/launch/remove",
        payload: launch
    };
}

export const clearCartLaunches = (): CartLaunchesAction => {
    return {
        type: "cart/launch/clear",
        payload: {}
    };
}
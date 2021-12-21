import { Rocket } from "../@types/appTypes";

const BASE_URL_API = "https://api.spacexdata.com";
const VERSION_API = "v4";
const NAME_ENDPOINT = "rockets";

export const getAllRockets = async (signal: AbortSignal): Promise<Rocket[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${BASE_URL_API}/${VERSION_API}/${NAME_ENDPOINT}`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const getRocketById = async (rocketId: string = "", signal: AbortSignal): Promise<Rocket> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${BASE_URL_API}/${VERSION_API}/${NAME_ENDPOINT}/${rocketId}`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}
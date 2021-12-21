import { LaunchResponse, QueryOptions } from "../@types/appAPITypes";
import { Launch } from "../@types/appTypes";

const BASE_URL_API = "https://api.spacexdata.com";
const VERSION_API = "v5";
const NAME_ENDPOINT = "launches";

export const getAllLaunches = async (signal: AbortSignal): Promise<Launch[]> => {
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

export const queryLaunchesByRocketId = async (
    signal: AbortSignal,
    query: Launch | {},
    options: QueryOptions,
): Promise<LaunchResponse> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const parameters = { query, options }

    const body: BodyInit = JSON.stringify(parameters);

    const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body,
        signal
    };

    const url = `${BASE_URL_API}/${VERSION_API}/${NAME_ENDPOINT}/query`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const getLaunchById = async (launchId: string = "", signal: AbortSignal): Promise<Launch> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${BASE_URL_API}/${VERSION_API}/${NAME_ENDPOINT}/${launchId}`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}
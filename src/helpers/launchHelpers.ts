import { Launch, LaunchFilter } from "../@types/appTypes";
import { getRandomInt } from "./appHelpers";

function getPlanet() {
    const planets = [
        "Mercury",
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ]

    const planet = planets[getRandomInt(0, planets?.length)];

    return planet;
}

function addInfoToLaunch(launch: Launch): Launch {
    const ticketCostUSD = getRandomInt();
    const destination = getPlanet();
    return { ...launch, destination, ticketCostUSD }
}

export const checkIfLaunchBooked = (launches: Launch[] = [], launchId: string = '') => {
    return launches.some(launch => {
        const condition = launch.id === launchId;
        return condition;
    });
}


export function processLaunches(launches: Launch[]) {
    return launches.map(launch => addInfoToLaunch(launch));
}

export function filterLaunch(launch: Launch, filter: LaunchFilter) {
    const { launchId,
        minPrice,
        maxPrice,
        countCapsules,
        countCrew,
        countShips } = filter;

    const { id, ticketCostUSD, capsules, crew, ships } = launch;
    const capsulesLength = !capsules ? 0 : capsules.length;
    const crewLength = !crew ? 0 : crew.length;
    const shipsLength = !ships ? 0 : ships.length;
    const conditionCost = ticketCostUSD >= minPrice && ticketCostUSD <= maxPrice;
    const conditionCapsules = capsulesLength < 5 ? capsulesLength === countCapsules : capsulesLength >= countCapsules;
    const conditionCrew = crewLength < 5 ? crewLength === countCrew : crewLength >= countCrew;
    const conditionShips = shipsLength < 5 ? shipsLength === countShips : shipsLength >= countShips;

    return id === launchId && conditionCost && conditionCapsules && conditionCrew && conditionShips;
}
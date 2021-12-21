export interface Rocket {
    id: string,
    type: string,
    name: string,
    description: string,
    active: boolean,
    flickr_images: string[],
    cost_per_launch: number,
    country: string,
    company: string,
    first_flight: string,
    height: RocketHeight,
    diameter: RocketDiameter,
    mass: RocketMass,
    stages: number,
    boosters: number,
    success_rate_pct: number
}

export interface RocketHeight {
    meters: number,
    feet: number
}

export interface RocketDiameter {
    meters: number,
    feet: number
}

export interface RocketMass {
    kg: number,
    lb: number
}

export interface Launch {
    id?: string,
    name?: string,
    flight_number?: number,
    links?: LaunchLink,
    ships: string[],
    capsules: string[],
    payloads: string[],
    launchpad: string,
    rocket?: string,
    success?: boolean,
    details?: string,
    date_local?: string,
    date_precision?: string,
    date_unix?: number,
    date_utc?: string,
    crew?: string[]
    upcoming?: boolean,
    ticketCostUSD: number,
    destination: string
}

export interface LaunchPatchLink {
    small: string,
    large: string
}

export interface LaunchRedditLink {
    campaign: string,
    launch: string,
    media: string | null,
    recovery: string | null
}

export interface LaunchFlickrLink {
    small: string[],
    original: string[],
}

export interface LaunchLink {
    patch: LaunchPatchLink,
    reddit: LaunchRedditLink,
    flickr: LaunchFlickrLink,
    presskit: string | null,
    webcast: string,
    youtube_id: string,
    article: string | null,
    wikipedia: string | null
}

export interface LaunchFilter {
    rocketId: string,
    launchId: string
    minPrice: number
    maxPrice: number
    countCapsules: number
    countCrew: number
    countShips: number
    isClear: boolean
}
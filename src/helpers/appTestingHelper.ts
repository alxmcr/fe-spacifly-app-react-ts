import { Launch } from "../@types/appTypes";

export const mockLaunch: Launch = {
    links: {
        patch: {
            small: "https://i.imgur.com/K7j17jw.png",
            large: "https://i.imgur.com/jA45x7I.png",
        },
        reddit: {
            campaign:
                "https://www.reddit.com/r/spacex/comments/rfim89/t%C3%BCrksat_5b_launch_campaign_thread/",
            launch:
                "https://www.reddit.com/r/spacex/comments/rja5u0/rspacex_t%C3%BCrksat_5b_launch_discussion_and_updates/",
            media: null,
            recovery: null,
        },
        flickr: {
            small: [],
            original: [],
        },
        presskit: null,
        webcast: "https://youtu.be/JBGjE9_aosc",
        youtube_id: "JBGjE9_aosc",
        article: null,
        wikipedia: null,
    },
    rocket: "5e9d0d95eda69973a809d1ec",
    success: true,
    details:
        "The Türksat 5B communication satellite, which its construction work continues at Airbus Defense and Space's facilities in Toulouse, France, will soon be sent to the Cape Canaveral Space Launch Station located in Florida, United States. The satellite will be launched into space onboard the Falcon 9 rocket following pre-launch preparations. With an estimated in-orbit lifetime of 30 years and the aim of securing Turkey’s orbital and frequency rights, Türksat 5B will be launched into an orbital slot at 42 degrees East. With 12 kW power, Türksat 5B will provide TV broadcasting and data communication services over a wide coverage area that reaches the entire Middle East, the Persian Gulf, the Red Sea, the Mediterranean, North Africa, East Africa, South Africa and Nigeria. Apart from that, the satellite will also provide customized services for airlines and commercial ship operators around the world thanks to the fact that it operates in Ka-Band.",
    crew: [],
    ships: [],
    capsules: [],
    payloads: ["5fe3c080b3467846b3242190"],
    launchpad: "5e9e4501f509094ba4566f84",
    flight_number: 142,
    name: "Türksat 5B",
    date_utc: "2021-12-19T03:58:00.000Z",
    date_unix: 1639886280,
    date_local: "2021-12-18T22:58:00-05:00",
    date_precision: "hour",
    upcoming: true,
    id: "5fe3afc1b3467846b3242164",
    ticketCostUSD: 15487987,
    destination: "Mars",
};

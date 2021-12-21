import { Rocket } from "./appTypes";

export interface RocketImageProps {
    images: string[]
}

export interface RocketCardProps {
    index: number;
    rocket: Rocket;
}
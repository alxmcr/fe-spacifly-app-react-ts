import { Rocket } from "./appTypes";

export interface RocketImageProps {
    images: string[]
}

export interface RocketCardProps {
    index: number;
    rocket: Rocket;
}

export interface AppSpinnerProps {
    color: "primary" | "secondary";
}
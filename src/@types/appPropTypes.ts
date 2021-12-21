import { Launch, Rocket } from "./appTypes";

export interface IconProps {
    className?: string;
    width: number;
    height: number;
}

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

export interface AppOverlayProps {
    showOverlay: boolean;
    children: React.ReactNode;
}

export interface LaunchInCartRowProps {
    launch: Launch;
}

export interface LaunchRowProps {
    launch: Launch;
}

export interface TotalCartRowProps {
    launchesInCart: Launch[];
}

export interface AppPaginationProps {
    totalPages?: number,
    page: number,
    hasPrevPage?: boolean,
    hasNextPage?: boolean,
    setPage: (page: number) => void
}

export interface AppToolbarProps {
    page: number,
    setPage: (page: number) => void,
    totalPages: number,
    hasNextPage: boolean,
    hasPrevPage: boolean,
}

export interface LaunchCardProps {
    launch: Launch;
}

export interface LaunchesByRocketContainerProps {
    rocketId: string;
    title: string;
    upcoming: boolean;
}

export interface FilterLaunchFormProps {
    rocketId: string;
}

export interface LaunchFilterContainerProps {
    rocketId: string;
}

export interface RocketHeroContainerProps {
    rocket: Rocket;
}

export interface RocketOverviewContainerProps {
    rocket: Rocket;
}
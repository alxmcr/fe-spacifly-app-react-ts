import { LaunchFilter } from "./appTypes";

export interface OverlayContextProps {
    showOverlay: boolean;
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OverlayProviderProps {
    children: React.ReactNode
}

export interface LaunchFilterContextProps {
    filter: LaunchFilter;
    setFilter: React.Dispatch<React.SetStateAction<LaunchFilter>>;
}

export interface LaunchFilterProviderProps {
    children: React.ReactNode
}
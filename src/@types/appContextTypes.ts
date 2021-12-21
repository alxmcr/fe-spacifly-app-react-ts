export interface OverlayContextProps {
    showOverlay: boolean;
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OverlayProviderProps {
    children: React.ReactNode
}
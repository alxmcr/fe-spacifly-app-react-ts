import { createContext, useState } from "react";
import {
  LaunchFilterContextProps,
  LaunchFilterProviderProps,
} from "../@types/appContextTypes";

const initialLaunchFilterState: LaunchFilterContextProps = {
  filter: {
    rocketId: "",
    launchId: "",
    maxPrice: 0,
    minPrice: 0,
    countCapsules: 0,
    countCrew: 0,
    countShips: 0,
    isClear: false,
  },
  setFilter: () => {},
};

export const LaunchFilterContext = createContext(initialLaunchFilterState);

export const LaunchFilterProvider = ({
  children,
}: LaunchFilterProviderProps) => {
  const [filter, setFilter] = useState(initialLaunchFilterState.filter);
  const value: LaunchFilterContextProps = { filter, setFilter };

  return (
    <LaunchFilterContext.Provider value={value}>
      {children}
    </LaunchFilterContext.Provider>
  );
};

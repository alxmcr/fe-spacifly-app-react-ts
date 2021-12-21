import { useEffect, useState } from "react";
import { LaunchResponse, QueryOptions } from "../@types/appAPITypes";
import { Launch } from "../@types/appTypes";
import { processLaunches } from "../helpers/launchHelpers";
import { queryLaunchesByRocketId } from "../services/launchServices";

export const useQueryLaunches = (
    rocketId: string = "",
    upcoming: boolean,
    page = 1,
    limit = 5
) => {
    const [launchResponse, setLaunchResponse] = useState<LaunchResponse | null>(null);
    const [loadingLaunches, setLoadingLaunches] = useState(false);
    const [errorLaunches, setErrorLaunches] = useState(false);

    useEffect(() => {
        fetchInitialLaunches(rocketId, page, limit);
    }, [rocketId, page, limit])

    const fetchInitialLaunches = async (rocketId: string = "", page: number, limit: number) => {
        setLoadingLaunches(true);
        setErrorLaunches(false);
        try {
            // Abort fetch
            let abortController = new AbortController();
            const { signal }: { signal: AbortSignal } = abortController;
            // Query & Query options
            const query: Launch | {} = !rocketId ? {} : { id: rocketId, upcoming };
            const options: QueryOptions = { page, limit }

            const response: LaunchResponse = await queryLaunchesByRocketId(signal, query, options);
            const launchesProcessed = processLaunches(response.docs);
            setLaunchResponse({
                ...response, docs: launchesProcessed
            });
        } catch (error) {
            setErrorLaunches(true);
        } finally {
            setLoadingLaunches(false);
        }
    }

    return { launchResponse, loadingLaunches, errorLaunches };
}
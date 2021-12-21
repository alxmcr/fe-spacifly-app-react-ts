import { useEffect, useState } from "react";
import { Rocket } from "../@types/appTypes";
import { getRocketById } from "../services/rocketServices";

export const useRocket = (rocketId: string = "") => {
    const [rocket, setRocket] = useState<Rocket | null>(null);
    const [loadingRocket, setLoadingRocket] = useState(false);
    const [errorRocket, setErrorRocket] = useState(false);

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingRocket(true);

        getRocketById(rocketId, signal)
            .then((response) => {
                setRocket(response);
                setLoadingRocket(false);
            }).catch(() => {
                setErrorRocket(true);
            }).finally(() => {
                setLoadingRocket(false);
            });

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [rocketId])

    return { rocket, loadingRocket, errorRocket };
}
import { useEffect, useState } from "react";
import { Rocket } from "../@types/appTypes";
import { getAllRockets } from "../services/rocketServices";

export const useRockets = () => {
    const [rockets, setRockets] = useState<Rocket[]>([]);
    const [loadingRockets, setLoadingRockets] = useState(false);
    const [errorRockets, setErrorRockets] = useState(false);

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingRockets(true);
        getAllRockets(signal)
            .then((response) => {
                setErrorRockets(false);
                setRockets(response);
                setLoadingRockets(false);
            }).catch(() => {
                setErrorRockets(true);
            }).finally(() => {
                setLoadingRockets(false);
            });

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [])

    return { rockets, loadingRockets, errorRockets };
}
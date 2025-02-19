import { IResponse } from "@/api/seminar-service-types";
import { getSeminars } from "@/api/seminar-service";
import { useEffect, useState } from "react";

export function useGetSeminars() {
    const [isLoading, setIsLoading] = useState(false);
    const [seminars, setSeminars] = useState<Promise<IResponse> | undefined>(undefined);
    const [error, setError] = useState(new Error());

    useEffect(() => {
        try {
            setIsLoading(true);
            const data = getSeminars();
            setSeminars(data);
        } catch (err) {
            setError(err as Error);
            console.error(err);
        } finally {
            setIsLoading(false)
        }
    }, [])

    return { seminars, isLoading, error }
}
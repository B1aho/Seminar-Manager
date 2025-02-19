import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ISeminar } from './api/seminar-service-types';
import { getSeminars, postSeminar } from './api/seminar-service';

export const SeminarContext = createContext<ISeminarContext | null>(null);

export interface ISeminarContext {
    seminars: ISeminar[] | undefined;
    loading: boolean;
    error: string | null;
    addSeminar: (data: Omit<ISeminar, 'id'>) => Promise<void>;
    // getSeminars: () => Promise<void>
}

export const SeminarContextProvider = ({ children }: { children: ReactNode }) => {
    const [seminars, setSeminars] = useState<ISeminar[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSeminars = async () => {
        try {
            setLoading(true);
            const data = await getSeminars();
            setSeminars(data);
            setError(null);
        } catch (err) {
            setError((err as Error).message);
            console.error(err);
        } finally {
            setLoading(false)
        }
    }

    const addSeminar = async (data: Omit<ISeminar, 'id'>) => {
        try {
            setLoading(true)
            const seminar = await postSeminar(data)
            setSeminars((prevData) => [...prevData, seminar])
        } catch (err) {
            setError((err as Error).message);
            console.error(err);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSeminars()
    }, [])

    return (
        <SeminarContext.Provider value={{ seminars, loading, error, addSeminar }}>
            {children}
        </SeminarContext.Provider>
    );
};

// Хук для удобного доступа к контексту
export const useSeminarsContext = (): ISeminarContext => {
    const context = useContext(SeminarContext);
    if (!context) {
        throw new Error('useSeminarsContext must be used within a SeminarsProvider');
    }
    return context;
};
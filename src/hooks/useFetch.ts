import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok)
                    throw new Error("Something went wrong!");
                const data = await response.json();
                setState({ data: data, loading: false, error: null });
            } catch (error) {
                setState({ data: null, loading: false, error: null })
            }
        }
        fetchData();
    }, [url]);

    return state;
}
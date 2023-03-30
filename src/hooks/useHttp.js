import { useState, useCallback } from "react";

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
        
            setLoading(false);

            return data;
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    }, [])

    return { loading, error, fetchData };
};

export default useHttp;
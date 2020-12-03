import { useEffect, useState } from "react"

export const useFetchAPI = (url: string) => {
    const [response, setResponse] = useState({data: null, loading: true})
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(result => {
            setResponse({data: result, loading: false});
        });
    }, [url, setResponse]);

    return response;
}
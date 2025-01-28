import React, { useEffect, useState } from "react";

/// Use fetch custom hook 
export  default function useFetch(url) {
    /// Creating state varialbles
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    async function getWeatherData() {
        try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            if (!response.ok) {
                setLoading(false);
                alert(json.message);
                return;
            }

            setData(json);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            console.log(error);
            
        }
    }

    useEffect(() => {
        getWeatherData();
    }, [url]);

    return { loading, data }
}
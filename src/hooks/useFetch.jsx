import React, { useEffect, useState } from "react";

/// Use fetch custom hook 
export default function useFetch(url){
    /// Creating state varialbles
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState();
    const [error,setError] = useState();

    async function getWeatherData(){
        try {
            setLoading(true);
          const response = await  fetch(url);
          const json = await response.json();
          setData(json);
          setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(()=>{
        getWeatherData();
    },[url]);

    return {loading , data , error}
}
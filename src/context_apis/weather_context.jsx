import { useState,useRef,createContext } from "react";
import useFetch from "../hooks/useFetch";
export const WeatherContext = createContext();

export function WeatherContextProvider({children}){
    const [query,setQuery] = useState("Mumbai");
    const searchRef = useRef();
    const {loading,data} = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);

    function handelSearch(){
        setQuery(searchRef.current.value);
    }

    return <WeatherContext.Provider value={{searchRef,loading,data,handelSearch}}>
        {children}
        </WeatherContext.Provider>

}
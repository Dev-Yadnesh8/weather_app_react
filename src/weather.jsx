// require('dotenv').config()
import React, { useRef, useState } from "react";
import useFetch from "./hooks/useFetch";


function WeatherComponent(){
    const [query,setQuery] = useState("Mumbai");
    const searchRef = useRef();
    const {loading,data,error} = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);

    

    function handelSearch(){
        setQuery(searchRef.current);
    }
    
    return (
        <div>
            Weather App
            <input ref={searchRef} type="text" placeholder="search"  onChange={(e)=> {searchRef.current = e.target.value}}/>
            <button onClick={handelSearch}>search</button>
            {loading && <h2>Loading...</h2>}
            {error && <h2>error.message</h2>}
            {data && <div>
                <h1>{data.name ?? "N/A"}</h1>
                <h1>{data.main.temp ?? "0.0"}</h1>
                <h1>{data.main.humidity ?? "N/A"}</h1>
                </div>}
        </div>
    );
}

export default WeatherComponent;
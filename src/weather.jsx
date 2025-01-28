import React, { useContext } from "react";
import { WeatherContext, WeatherContextProvider } from "./context_apis/weather_context";
import { IoMdSearch } from "react-icons/io";
import "./Weather.css";

function WeatherComponent() {
  return (
    <WeatherContextProvider>
      <div className="app-container">
        <div className="weather-card">
          <Heading />
          <SearchBar />
          <Body />
        </div>
      </div>
    </WeatherContextProvider>
  );
}

function Heading() {
  return <h2 className="heading">Today's Weather</h2>;
}

function SearchBar() {
  const { searchRef, handelSearch } = useContext(WeatherContext);
  return (
    <div className="search-bar">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search city"
        className="search-input"
      />
      <button onClick={handelSearch} className="search-button">
        <IoMdSearch size={20} />
      </button>
    </div>
  );
}

function Body() {
  const { loading, data } = useContext(WeatherContext);
  return (
    <div className="weather-body">
      {loading && <h2 className="loading">Loading...</h2>}
      {data && (
        <div className="weather-data">
          <h1 className="city-name">{data.name ?? "N/A"}</h1>
          <h1 className="temperature">{data.main.temp ?? "0.0"}°C</h1>
          <h1 className="humidity">Humidity: {data.main.humidity ?? "N/A"}%</h1>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;

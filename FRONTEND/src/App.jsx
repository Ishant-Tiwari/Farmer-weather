import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import AdvisoryBox from "./components/AdvisoryBox";
import { fetchWeather } from "./api";

export default function App() {
  const [data, setData] = useState(null);

  const handleSearch = async (loc) => {
    const res = await fetchWeather(loc);
    setData(res.data);
  };

  return (
    <div className="container">
      <h1>Farmer Weather & Advisory Tool</h1>
      <SearchBar onSearch={handleSearch} />

      {data && (
        <>
          <WeatherCard forecast={data.forecast} location={data.location} />
          <AdvisoryBox advisories={data.advisories} />
        </>
      )}
    </div>
  );
}

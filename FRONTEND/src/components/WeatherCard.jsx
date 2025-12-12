import React from "react";
import ChartTemp from "./ChartTemp";
import "./card.css";

export default function WeatherCard({ forecast, location }) {
  const now = forecast.list[0];

  return (
    <div className="card">
      <h2>{location}</h2>

      <div className="row">
        <p>🌡 Temperature: {now.main.temp}°C</p>
        <p>💧 Humidity: {now.main.humidity}%</p>
        <p>🌬 Wind: {(now.wind.speed * 3.6).toFixed(1)} km/h</p>
        <p>🌧 Rain Probability (POP): {(now.pop * 100).toFixed(0)}%</p>
      </div>

      <ChartTemp forecast={forecast} />
    </div>
  );
}

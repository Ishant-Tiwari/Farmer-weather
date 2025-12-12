import axios from "axios";

export const fetchWeather = (location) =>
  axios.get("http://localhost:5000/api/weather", {
    params: { location },
  });

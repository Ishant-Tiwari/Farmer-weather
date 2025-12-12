require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const { generateAdvisories } = require("./advisory");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;  // <-- FIXED
const OWM_KEY = process.env.OWM_API_KEY;

app.get("/api/weather", async (req, res) => {
  try {
    const { location } = req.query;

    if (!location) {
      return res.status(400).json({ error: "Location required" });
    }

    // GEO API
    const geo = await axios.get(
      "http://api.openweathermap.org/geo/1.0/direct",
      { params: { q: location, limit: 1, appid: OWM_KEY } }
    );

    if (!geo.data.length) {
      return res.status(404).json({ error: "Location not found" });
    }

    const { lat, lon } = geo.data[0];

    // WEATHER FORECAST API
    const forecast = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      { params: { lat, lon, appid: OWM_KEY, units: "metric" } }
    );

    const advisories = generateAdvisories(forecast.data);

    res.json({
      coords: { lat, lon },
      forecast: forecast.data,
      advisories,
      location,
    });
  } catch (err) {
    console.log("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Backend running on ${PORT}`));

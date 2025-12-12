function convertMsToKmh(ms) {
  return ms * 3.6;
}

function generateAdvisories(forecast) {
  const advisories = new Set();
  const list = forecast.list;

  const next8 = list.slice(0, 8);
  const next2 = list.slice(0, 2);
  const next16 = list.slice(0, 16);

  if (next8.some(b => b.pop !== undefined && b.pop > 0.6))
    advisories.add("🌧 High rain chance (>60%). Avoid irrigation and spraying.");

  if (next16.some(b => b.main.temp > 35))
    advisories.add("🔥 High temperature (>35°C). Increase irrigation frequency.");

  if (next8.some(b => convertMsToKmh(b.wind.speed) > 15))
    advisories.add("💨 Strong winds (>15 km/h). Avoid pesticide spraying.");

  if (next8.some(b => b.main.humidity > 80))
    advisories.add("💦 High humidity (>80%). Fungal infection risk.");

  if (next2.every(b => convertMsToKmh(b.wind.speed) < 10 && (b.pop || 0) < 0.1))
    advisories.add("✅ Good spraying window for next 6 hours.");

  return [...advisories];
}

module.exports = { generateAdvisories };

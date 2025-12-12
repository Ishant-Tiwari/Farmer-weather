import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";

export default function ChartTemp({ forecast }) {
  const tempData = forecast.list.slice(0, 12).map((i) => ({
    time: i.dt_txt,
    temp: i.main.temp,
  }));

  return (
    <LineChart width={500} height={250} data={tempData}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="temp" stroke="blue" />
    </LineChart>
  );
}

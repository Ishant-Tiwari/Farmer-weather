import React from "react";
import "./advisory.css";

export default function AdvisoryBox({ advisories }) {
  return (
    <div className="adv-box">
      <h3>Advisories</h3>
      <ul>
        {advisories.map((adv, i) => (
          <li key={i}>{adv}</li>
        ))}
      </ul>
    </div>
  );
}

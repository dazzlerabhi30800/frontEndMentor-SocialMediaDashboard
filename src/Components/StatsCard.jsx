import React from "react";

function StatsCard({data}) {
  return (
    <div className="stats--card">
      <p className="views">{data.title}</p>
      <img
        className="social--icon"
        src={data.img}
        alt="socialImage"
      />
      <h4>{data.views}</h4>
      <span className="stat">
        <img src={data.arrowIcon} alt="arrow" />
        2%
      </span>
    </div>
  );
}

export default StatsCard;

import React from "react";
import SocialCard from "./SocialCard";
import data from './data.js';

function Social() {
    const socialCard = data.map((item, i) => {
        return(
            <SocialCard data={item} key={i} />
        )
    })
  return (
    <div className="social--wrapper">
        {socialCard}
    </div>
  );
}

export default Social;

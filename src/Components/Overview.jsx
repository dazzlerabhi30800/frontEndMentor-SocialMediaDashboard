import React from 'react';
import data2 from './data2.js';
import StatsCard from './StatsCard.jsx';

function Overview() {
    const statsCard = data2.map((data, i) => {
        return(
            <StatsCard data={data} key={i} />
        )
    })
    return(
        <div className="overview--wrapper">
            <h3>Overview - Today</h3>
            <div className="stats--wrapper">
                {statsCard} 
            </div>
        </div>
    )
}
export default Overview;
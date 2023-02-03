import React from 'react';
import "./Scoreboard.css"
const Scoreboard = ({score,xplaying}) => {

    const {xScore,oScore}=score;
    return (
        <div className="scoreboard">
           <span className={`score x-score ${!xplaying && "inactive"}`}>x-{xScore}</span>
            <span className={`score o-score ${xplaying && "inactive"}`}>o-{oScore}</span>
        </div>
    );
};

export default Scoreboard;
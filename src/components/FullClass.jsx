import React from "react";
import { unixToDateShort, getInstructorsName } from "../Utils";

import "./FullClass.css";

// return the total number of ball
const getBalls = (level) => {
    var elements = [];
    for(var i = 1; i <= 3; i++)
    {
        elements.push(ball(i <= level, i));
    }
    return (
        <span>
            {elements}
        </span>
    );
}
//gets the ball type
const ball = (full, id) => {
    return full? (<span key={id}className="fullball" alt = "none"></span>):
                 (<span key={id} className="emptyball" alt = "none"></span>);
}

const FullClass = ({ trainClass }) => {
  return (
    <div className="fullClass">
      <div className="thumbnail">
        <img src={trainClass.image} alt="none"/>
        <div className="title"> 
            <h3>{trainClass.name}</h3>
            <h4>{getInstructorsName(trainClass.instructor_id)}</h4>
        </div>
        </div>
      <div className="footer">
          <div className="level">Nivel {getBalls(trainClass.level)}</div>
          <div className="date"> {unixToDateShort(trainClass.published)}</div>
          <div className="duration"> Duración {Math.trunc(trainClass.duration / 60)}'</div>
      </div>
          <div className={"square-bottom category" + trainClass.category_id}></div>
    </div>
  );
};

export default FullClass;

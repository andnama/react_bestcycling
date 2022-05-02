import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { unixToDateShort, getInstructorsName } from "../Utils";

import "./FullClass.css";

// return the total number of ball
const getBalls = (level) => {
  if (level === 1) {
    return (
      <div className="balls">
        <Ball full={true} />
        <Ball full={false} />
        <Ball full={false} />
      </div>
    );
  }
  if (level === 2) {
    return (
      <div className="balls">
        <Ball full={true} />
        <Ball full={true} />
        <Ball full={false} />
      </div>
    );
  }
  if (level === 3) {
    return (
      <div className="balls">
        <Ball full={true} />
        <Ball full={true} />
        <Ball full={true} />
      </div>
    );
  }
};
//gets the ball type
const Ball = ({ full }) => {
  return full ? (
    <div className="fullball" alt="none"></div>
  ) : (
    <div className="emptyball" alt="none"></div>
  );
};
const Finished = () => {
  return (
    <div className="finished">
          Completada
        </div>
  )
}
const FullClass = ({ trainClass, element }) => {
  // CheckBox state and handler
  const [checked, setChecked] = useState(true);
  const handleCheck = (e) => {
    setChecked(!checked);
  };
  //Navigate for component selection
  let navigate = useNavigate();
  const handleNavigation = (e) => {
    navigate("/media_player", { state: element });
  };
  // Finished state for component
  const [finished, setFinished] = useState(true);
  //Component
  return (
    <div className="fullClass" onClick={() => handleNavigation()}>
      <div className="thumbnail">
        <img src={trainClass.image} alt="none" />
        <div className="top_info">
          <input
            className="checkBox"
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
          />
          <div className="title">
            <h3>{trainClass.name}</h3>
            <h4>{getInstructorsName(trainClass.instructor_id)}</h4>
          </div>
        </div>
        {finished? <Finished/> : null}
      </div>
      <div className="footer">
        <div className="level">Nivel {getBalls(trainClass.level)}</div>
        <div className="date"> {unixToDateShort(trainClass.published)}</div>
        <div className="duration">
          {" "}
          Duración {Math.trunc(trainClass.duration / 60)}'
        </div>
      </div>
      <div className={"square-bottom category" + trainClass.category_id}></div>
    </div>
  );
};

export default FullClass;

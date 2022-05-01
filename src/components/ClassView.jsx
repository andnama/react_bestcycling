import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getInstructorsName } from "../Utils";
import "./ClassView.css";

//data
import { trainingClasses } from "../db/db";

const ClassView = () => {
  let navigate = useNavigate();
  let {state} = useLocation();
  // In case the element selected is 0 we choose the fisrt one
  state = state === null?  0 : state;
  return (
    <div className="class_view">
      <div className="view_top">
        <button className="return_class_view" onClick={() => navigate("/")}>
            {"<"}
        </button>
        <div className="class_info">
            {console.log(state)}
          <h1>{trainingClasses[state].name}</h1>
          <h3>{getInstructorsName(trainingClasses[state].instructor_id)}</h3>
        </div>
      </div>
      <div className="media_player">5</div>
    </div>
  );
};

export default ClassView;

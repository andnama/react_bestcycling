import React, { useContext, useState } from "react";
import { unixToDateLong, getInstructorsName } from "../Utils";
import { useNavigate } from "react-router-dom";

import "./SmallClass.css";
import icon from "../assets/small_logo.png";
import { ApiContext } from "../providers/ApiContextProvider";

const SmallClass = ({ trainClass, element }) => {
  //Classes state and data
  const { instructors } = useContext(ApiContext);
  const instructorName = getInstructorsName(
    trainClass.instructor_id,
    instructors
  );

  let navigate = useNavigate();
  return (
    <div
      key={trainClass.id}
      className="small_class"
      onClick={() => navigate("/media_player", { state: element })}
    >
      <div className="small_class_header">
        <img className="small_icon" src={icon} alt="None" />
        <h4 className="date">{unixToDateLong(trainClass.published)}</h4>
      </div>
      <div className="content">
        <h4>{trainClass.name}</h4>
        <h5>{instructorName}</h5>
      </div>
    </div>
  );
};

export default SmallClass;

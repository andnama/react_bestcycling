import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import {
  unixToDateShort,
  getInstructorsName,
  arrayInLocal,
  arrayToLocal,
} from "../Utils";

//Styling
import "./FullClass.css";

// return the total number of ball
const getBalls = (level) => {
  return (
    <div className="balls">
      {[...Array(3).keys()].map((v) => (
        <Ball full={v < level} />
      ))}{" "}
    </div>
  );
};
//gets the ball type
const Ball = ({ full }) => (
  <div className={full ? "fullball" : "emptyball"} alt="none" />
);

const Finished = () => {
  return <div className="finished">Completada</div>;
};
const FullClass = ({ trainClass, element, finished }) => {
  // CheckBox state and handler
  const [checked, setChecked] = useState(false);
  //Initialize checks
  useEffect(() => {
    let array = arrayInLocal("auxList") ? arrayInLocal("auxList") : [];
    let i = array.indexOf(element);
    if (i !== -1) setChecked(!checked);
  }, []);
  // Controller for check button
  const handleCheck = () => {
    let array = arrayInLocal("auxList") ? arrayInLocal("auxList") : [];
    if (checked) {
      // remove if unchecked
      let i = array.indexOf(element);
      if (i !== -1) array.splice(i, 1);
    } else {
      // add if checked
      array.push(element);
      arrayToLocal("auxList", array);
    }
    setChecked(!checked);
  };
  //Navigate for component selection
  let navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate("/media_player", { state: element });
  };
  // controller for autoPlay button
  const autoPlay = () =>{
    let array = arrayInLocal("auxList")? arrayInLocal("auxList"): [];
    array.map(item => {
      //Navigate for component selection
      navigate("/media_player", { state: item });
    })
  }
  //Component
  return (
    <>
      <div className="fullClass" onClick={(e) => handleNavigation(e)}>
        <div className="thumbnail">
          <img src={trainClass.image} alt="none" />
          <div className="top_info">
            <label>
              <input
                className="checkBox"
                type="checkbox"
                checked={checked}
                onClick={(e) => e.stopPropagation()}
                onChange={handleCheck}
              />
            </label>
            <div className="title">
              <h3>{trainClass.name}</h3>
              <h4>{getInstructorsName(trainClass.instructor_id)}</h4>
            </div>
          </div>
          {finished ? <Finished /> : null}
        </div>
        <div className="footer">
          <div className="level">Nivel {getBalls(trainClass.level)}</div>
          <div className="date"> {unixToDateShort(trainClass.published)}</div>
          <div className="duration">
            {" "}
            Duración {Math.trunc(trainClass.duration / 60)}'
          </div>
        </div>
        <div
          className={"square-bottom category" + trainClass.category_id}
        ></div>
      </div>
    </>
  );
};

export default FullClass;

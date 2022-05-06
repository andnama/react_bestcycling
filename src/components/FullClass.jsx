import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../providers/ApiContextProvider";
import { PlayerContext } from "../providers/PlayerContextProvider";

// Utils
import { unixToDateShort, getInstructorsName, arrayInLocal } from "../Utils";

//Styling
import "./FullClass.css";

// return the total number of ball
const getBalls = (level) => {
  return (
    <div className="balls">
      {[...Array(3).keys()].map((v) => (
        <Ball key={v} full={v < level} />
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
  //Classes state and data
  const { add, remove } = useContext(PlayerContext);

  //Classes state and data
  const { instructors } = useContext(ApiContext);
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
    if (checked) {
      // remove if unchecked
      remove(element);
    } else {
      // add if checked
      add(element);
    }
    //Update checked objects
    setChecked(!checked);
  };
  //Navigate for component selection
  let navigate = useNavigate();

  const handleNavigation = (e) => {
    add(element);
    navigate("/media_player", { state: element });
  };
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
              <h3 className="class_name">{trainClass.name}</h3>
              <h4>
                {getInstructorsName(trainClass.instructor_id, instructors)}
              </h4>
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

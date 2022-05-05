import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//Styling
import "./ClassView.css";

//Utils
import { arrayInLocal, arrayToLocal, getInstructorsName } from "../Utils";
import { ApiContext } from "../providers/ApiContextProvider";
import { PlayerContext } from "../providers/PlayerContextProvider";

const MediaPlayer = () => {
  //Classes state and data
  const { trainingClasses, instructors } = useContext(ApiContext);
  let navigate = useNavigate();
  let { state } = useLocation();
  const [isFinished, setIsFinished] = useState(false);

  const {
    state: playerState,
    switchAutoOff,
    remove,
  } = useContext(PlayerContext);
  console.log(playerState.autoPlay);
  if (!state && playerState.autoArray.length) {
    state = playerState.autoArray[0];
  }
  // 5 seconds for the counter
  const [count, setCount] = useState(5);
  // saves value for next class to watch

  // Count down and completetion set when it finishes
  useEffect(() => {
    if (count === 0) timerIs0();
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  });

  // If timer gets to 0 update state in localStorage about completition
  const timerIs0 = () => {
    setCount(5);
    remove(state);
    console.log(playerState.autoPlay);
    if (!playerState.autoPlay) navigate("/");
    let arrayFinished = arrayInLocal("finished_array");
    arrayFinished[state] = true;
    arrayToLocal("finished_array", arrayFinished);
  };
  useEffect(() => {
    if (!playerState?.autoArray.length && playerState.autoPlay) {
      setIsFinished(true);
      switchAutoOff();
      navigate("/");
    }
  }, [playerState, navigate]);

  //clicked on return button without finishing
  const manualReturn = () => {
    // 33 code means return from media player
    switchAutoOff();
    navigate("/");
  };

  // In case the class selected is null we choose the first one
  state = state === null ? 0 : state;
  if (isFinished) return <div>Redirecting...</div>;
  return (
    <div className="class_view">
      <div className="view_top">
        <button className="return_class_view" onClick={() => manualReturn()}>
          {"<"}
        </button>
        <div className="class_info">
          <h1>{trainingClasses[state].name}</h1>
          <h3>
            {getInstructorsName(
              trainingClasses[state].instructor_id,
              instructors
            )}
          </h3>
        </div>
      </div>
      <div className="media_player">{count}</div>
    </div>
  );
};

export default MediaPlayer;

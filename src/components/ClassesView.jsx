import { useContext } from "react";
import { useNavigate } from "react-router";
import { ApiContext } from "../providers/ApiContextProvider";
import { PlayerContext } from "../providers/PlayerContextProvider";
import { Classes } from "./Classes";

// Loads classes and controls auto play
const ClassesView = () => {
  // get navigate
  const navigate = useNavigate();
  //Classes state and data
  const { trainingClasses } = useContext(ApiContext);

  //Classes state and data
  const auto = () => {
    navigate("/media_player");
  };
  return (
    <>
      <div className="automatic" onClick={() => auto()}>
        <div className="outsideTriangle" />
        <div className="insideTriangle" />
        <h2 className="autoText">Reproducir Automáticamente</h2>
      </div>
      <div className="container">
        <Classes classes={trainingClasses} isFullClasses={true} />
      </div>
    </>
  );
};
export default ClassesView;

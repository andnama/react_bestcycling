import { createContext, useState } from "react";

const autoState = {
  autoPlay: true,
  autoArray: [],
};

export const PlayerContext = createContext(autoState);

const PLayerContextProvider = (props) => {
  const [state, setState] = useState(autoState);

  const switchAutoOn = () => {
    setState({
      autoPlay: true,
      ...state,
    });
    console.log(state.autoPlay);
  };
  const switchAutoOff = () => {
    setState({
      autoPlay: false,
      ...state,
    });
  };
  const remove = (id) => {
    let aux = state.autoArray.filter((el) => el !== id);
    setState({
      autoPlay: state.autoPlay,
      autoArray: aux,
    });
  };
  const add = (item) => {
    state.autoArray.push(item);
    setState({
      autoPlay: state.autoPlay,
      autoArray: state.autoArray,
    });
  };
  return (
    <PlayerContext.Provider
      value={{ state, switchAutoOn, switchAutoOff, remove, add }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PLayerContextProvider;

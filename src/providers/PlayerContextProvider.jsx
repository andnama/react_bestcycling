import { createContext, useState } from "react";

const autoState = {
  autoArray: [],
};

export const PlayerContext = createContext(autoState);

const PLayerContextProvider = (props) => {
  const [state, setState] = useState(autoState);

  const remove = (id) => {
    let aux = state.autoArray.filter((el) => el !== id);
    setState({
      autoArray: aux,
    });
  };
  const removeAll = (id) => {
    let aux = [];
    setState({
      autoArray: aux,
    });
  };
  const add = (item) => {
    state.autoArray.push(item);
    setState({
      autoArray: state.autoArray,
    });
  };
  return (
    <PlayerContext.Provider value={{ state, remove, add, removeAll }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PLayerContextProvider;

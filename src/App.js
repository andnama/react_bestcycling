import React from "react";
import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

//styling
import "./App.css";
import logo from "./assets/logo.png";

//Components
import Profile from "./components/Profile";
import ClassView from "./components/ClassView";

// Utils
import { Classes } from "./components/Classes";
import { falseArray, arrayToLocal, arrayInLocal } from "./Utils";

//data
import { trainingClasses } from "./db/db";

// Methods to get components
const SetProfile = () => {
  return (
    <>
      <Profile />
      <div className="container">
        <Classes all={false} />
      </div>
    </>
  );
};
const SetAllClasses = () => {
  let navigate = useNavigate();
    //  auto play handler
    const autoPlay = () =>{
      let array = arrayInLocal("auxList")? arrayInLocal("auxList"): [];
      array.map(item => {
        let array = arrayInLocal("auxList") ? arrayInLocal("auxList") : [];
        // remove after call to it
        let i = array.indexOf(item);
        console.log(item);
        if (i !== -1) array.splice(i, 1);
        arrayToLocal("auxList", array);
        //Navigate for component selection
        navigate("/media_player", { state: item });
      })
    }
  return (
    <>
    <div className="automatic" onClick={() => autoPlay()}>
        <div className="outsideTriangle"/>
        <div className="insideTriangle" />
        <h2 className="autoText">Reproducir Automáticamente</h2>
      </div>
      <div className="container">
        <Classes isFullClasses={true} />
      </div>
    </>
  );
};
const SetClassView = () => {
  return <ClassView />;
};

export const App = () => {
  //Classes state 
  const [finished, setFinished] = useState([]);
  const auxList = [];
  // Use effect initilizes the array for completed
  useEffect(() => {
    setFinished(falseArray(finished, trainingClasses.length));
    arrayToLocal("finished_array", finished);
    arrayToLocal("auxList", auxList);
  }, []);
  
  //App state
  return (
    <BrowserRouter>
      <div className="app">
        <div className="header">
          <img className="logo" src={logo} alt="none" />
        </div>
        <Routes>
          <Route path="/" element={<SetProfile />} />
          <Route path="/all_classes" element={<SetAllClasses />} />
          <Route path="/media_player" element={<SetClassView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

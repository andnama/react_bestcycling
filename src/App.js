import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//styling
import "./App.css";
import logo from "./assets/logo.png";

//Components
import HomeView from "./components/HomeView";

// Utils
import { falseArray, arrayToLocal } from "./Utils";

//data
import ClassesView from "./components/ClassesView";
import MediaPlayer from "./components/MediaPlayer";
import { ApiContext } from "./providers/ApiContextProvider";

export const App = () => {
  //Classes state and data
  const { trainingClasses } = useContext(ApiContext);
  const [finished, setFinished] = useState([]);
  // Use effect initilizes the array for completed
  useEffect(() => {
    setFinished(falseArray(finished, trainingClasses?.length));
    arrayToLocal("finished_array", finished);
  }, []);

  //App state
  return (
    <BrowserRouter>
      <div className="app">
        <div className="header">
          <Link to="/">
            <img className="logo" src={logo} alt="none" />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/all_classes" element={<ClassesView />} />
          <Route path="/media_player" element={<MediaPlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

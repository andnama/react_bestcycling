import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//styling
import "./App.css";
import logo from "./assets/logo.png";

//Components
import Profile from "./components/Profile";
import ClassView from "./components/ClassView";

// Utils
import { Classes } from "./components/Classes";

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
  return (
    <>
      <div className="automatic">
        <div className="outsideTriangle"/>
        <dive className="insideTriangle" />
        <h2 className="autoText">Reproducir Automáticamente</h2>
      </div>
      <div className="container">
        <Classes all={true} />
      </div>
    </>
  );
};
const SetClassView = () => {
  return <ClassView />;
};

export const App = () => {
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

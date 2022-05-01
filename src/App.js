import React from "react";
import { useEffect, useState } from "react";

//data
import { trainingClasses } from "./db/db";

//styling
import "./App.css";
import logo from "./assets/logo.png";

//Components
import FullClass from "./components/FullClass";
import SmallClass from "./components/SmallClass";
import Profile from "./components/Profile";
import ClassView from "./components/ClassView";

// return all clases if true in full format or only 9 in small format if false
const Classes = ({all}) => {
    //we'll use i as id for every class card created
    var i = 0;
  // Check if user has classes
  return trainingClasses.length > 0 ? (
    // the iterate through map
    trainingClasses.slice(0, all? trainingClasses.lenth : 9).map((trainC) => {
        return all?  (<FullClass key={i++} trainClass={trainC} />) : 
                     (<SmallClass key={i++} trainClass={trainC}/>);
    })
  ) : (
    <h1>No Classes to show</h1>
  );
};

const App = () => {
  // Application loads -> load user from json
  useEffect(() => {}, []);

  return (
    <div className="app">
      <div className="header">
        <img className="logo" src={logo} alt="none" />
      </div>
      <Profile/>
      <div className="container">
        <Classes all={false}/>
      </div>
      {/* <ClassView trainClass={trainingClasses[2]}/> */}
    </div>
  );
};

export default App;

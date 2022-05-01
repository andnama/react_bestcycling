import React, { Fragment } from "react";
import { unixToDateLong, getInstructorsName } from "../Utils";

import "./SmallClass.css";
import icon from "../assets/small_logo.png";

const SmallClass = ({trainClass}) => {
    return (
        <div key={trainClass.id} className="small_class">
            <div className="header">
                <img className="small_icon" src={icon} alt="None"/>
                <h4 className="date">{unixToDateLong(trainClass.published)}</h4>
            </div>
            <div className="content">
                <h4>{trainClass.name}</h4>
                <h5>{getInstructorsName(trainClass.instructor_id)}</h5>
            </div>
        </div>
    )
}

export default SmallClass;
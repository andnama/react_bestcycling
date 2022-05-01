import React from "react";
import { getInstructorsName } from "../Utils";

import "./ClassView.css";

const ClassView = ({trainClass}) => {
    return (
        <div className="class_view">
            <div className="view_top">
                <button className="return_class_view">
                    {"<"}
                </button>
                <div className="class_info">
                    <h1>{trainClass.name}</h1>
                    <h3>{getInstructorsName(trainClass.instructor_id)}</h3>
                </div>
            </div>
            <div className="media_player">
                5
            </div>
        </div>
    )
}

export default ClassView;
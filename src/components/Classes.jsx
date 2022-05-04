import { useNavigate } from "react-router";

//data
import { trainingClasses } from "../db/db";

//components 
import FullClass from "./FullClass";
import SmallClass from "./SmallClass";

//Utils
import { arrayInLocal } from "../Utils";

// return all clases if true in full format or only 9 in small format if false
export const Classes = ({isFullClasses }) => {
    //get array with changed items to intialize
    const finished = arrayInLocal("finished_array");
    //we'll use i as id for every class card created
    var i = 0;
    //navigate
    
    // Check if user has classes
    if(!trainingClasses.length) return <div> No Classes </div>;
    return(
      <>
      {
        trainingClasses.slice(0, isFullClasses ? trainingClasses.length : 9).map((trainC) => {
          if(isFullClasses) return <FullClass key={i} trainClass={trainC} finished={finished[i]} element={i++} />;
          return <SmallClass key={i} trainClass={trainC} element={i++}/>;
        })
      }
      </>
    )
  }
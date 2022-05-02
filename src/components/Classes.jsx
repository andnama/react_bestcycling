//data
import { trainingClasses } from "../db/db";

//components 
import FullClass from "./FullClass";
import SmallClass from "./SmallClass";

// return all clases if true in full format or only 9 in small format if false
export const Classes = ({ all }) => {
    //we'll use i as id for every class card created
    var i = 0;
    // Check if user has classes
    return trainingClasses.length > 0 ? (
      // the iterate through map
      trainingClasses.slice(0, all ? trainingClasses.lenth : 9).map((trainC) => {
        return all ? (
          <FullClass key={i} trainClass={trainC} element={i++}/>
        ) : (
          <SmallClass key={i} trainClass={trainC} element={i++}/>
        );
      })
    ) : (
      <h1>No Classes to show</h1>
    );
  }
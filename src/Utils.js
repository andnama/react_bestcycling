//data
import { instructors, trainingClasses } from "./db/db";

//components 
import FullClass from "./components/FullClass";
import SmallClass from "./components/SmallClass";

// Returns the date string <date month> from a unix value
export const unixToDateShort = (unix) => {
  // Specific format for date
  var options = { day: "numeric", month: "short" };
  return new Date(unix).toLocaleDateString("es-ES", options);
};

// Returns the date string <date month year> from a unix value
export const unixToDateLong = (unix) => {
  // Specific format for date
  var options = { day: "numeric", month: "short", year: "numeric" };
  return new Date(unix).toLocaleDateString("es-ES", options);
};

// Gets the instructors code and exchanges it with the real name
export const getInstructorsName = (instructor_id) => {
  for(var i = 0; i < instructors.length; i++)
  {
      if(instructors[i].id === instructor_id) return instructors[i].name;
  }
  return "No such instructor"
}

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
};
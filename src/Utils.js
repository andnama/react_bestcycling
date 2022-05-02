//data
import { instructors} from "./db/db";

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
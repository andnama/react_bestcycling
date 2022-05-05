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
export const getInstructorsName = (instructor_id, instructors) => {
  if (!instructors) return "No such instructor";
  for (var i = 0; i < instructors.length; i++) {
    if (instructors[i].id === instructor_id) return instructors[i].name;
  }
  return "No such instructor";
};

// set all elements of array to false
export const falseArray = (array, size) => {
  for (var i = 0; i < size; i++) {
    array.push(false);
  }
  return array;
};

// returns array from localStorage
export const arrayInLocal = (name) => JSON.parse(localStorage?.getItem(name));
export const arrayToLocal = (name, item) =>
  localStorage.setItem(name, JSON.stringify(item));

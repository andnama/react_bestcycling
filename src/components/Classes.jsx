//components
import FullClass from "./FullClass";
import SmallClass from "./SmallClass";

//Utils
import { arrayInLocal } from "../Utils";

// return all clases if true in full format or only 9 in small format if false
export const Classes = ({ classes, isFullClasses }) => {
  //get array with changed items to intialize
  const finished = arrayInLocal("finished_array");
  //we'll use i as id for every class card created

  // Check if user has classes
  if (!classes?.length)
    return <div style={{ color: "white" }}> No Classes </div>;
  return (
    <>
      {classes.map((trainC, i) => {
        if (isFullClasses)
          return (
            <FullClass
              key={i}
              trainClass={trainC}
              finished={finished[i]}
              element={i}
            />
          );
        return <SmallClass key={i} trainClass={trainC} element={i} />;
      })}
    </>
  );
};

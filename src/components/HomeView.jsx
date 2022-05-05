import { useContext } from "react";
import { ApiContext } from "../providers/ApiContextProvider";
import { Classes } from "./Classes";
import Profile from "./Profile";

// Loads home or next class if autoplay enabled
const HomeView = () => {
  //Classes state and data
  const { trainingClasses } = useContext(ApiContext);
  return (
    <>
      <Profile />
      <div className="container">
        <Classes classes={trainingClasses?.slice(0, 9)} isFullClasses={false} />
      </div>
    </>
  );
};

export default HomeView;

import { createContext, useEffect, useState } from "react";

const initialState = {
  profile: null,
  categories: null,
  instructors: null,
  trainingClasses: null,
};

export const ApiContext = createContext(initialState);

const ApiContextProvider = (props) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // fetch api json and set for app
    fetch(
      "https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json"
    )
      .then((response) => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        setState({
          profile: jsonData.profile,
          categories: jsonData.categories,
          instructors: jsonData.instructors,
          trainingClasses: jsonData.training_classes,
        });
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
  }, []);

  return (
    <ApiContext.Provider value={state}>{props.children}</ApiContext.Provider>
  );
};

export default ApiContextProvider;

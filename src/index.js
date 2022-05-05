import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ApiContextProvider from "./providers/ApiContextProvider";
import PLayerContextProvider from "./providers/PlayerContextProvider";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <ApiContextProvider>
    <PLayerContextProvider>
      <App />
    </PLayerContextProvider>
  </ApiContextProvider>
);

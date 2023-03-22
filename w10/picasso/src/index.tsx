import React from "react";
import ReactDOM from "react-dom/client";

import Picasso from "@toptal/picasso-provider";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Picasso>
      <App />
    </Picasso>
  </React.StrictMode>
);

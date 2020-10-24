import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";

import App from "./containers/App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

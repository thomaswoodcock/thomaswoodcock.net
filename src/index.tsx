import {StrictMode} from "react";
import {render} from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";

import App from "./containers/App";

render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Worker from "./worker?worker";

new Worker();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

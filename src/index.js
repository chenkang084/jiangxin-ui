// require("./Squire-UI");

import React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/editor/editor";
import config from "./config";
import Router from "./routes";

window.onload = function() {
  ReactDOM.render(<Router />, document.getElementById("root"));
};

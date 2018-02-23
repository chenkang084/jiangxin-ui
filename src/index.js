import React from "react";
import ReactDOM from "react-dom";
import config from "./config";
import Router from "./routes";
import "./assets/styles/article-common.css";

window.onload = function() {
  ReactDOM.render(<Router />, document.getElementById("root"));
};

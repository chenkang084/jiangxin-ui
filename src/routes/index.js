import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Editor from "../components/editor/editor";
import App from "../components/app";
import Home from "../components/home/home";

function handleRoute(params) {
  console.log(params);
}

const appRouters = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onChange={handleRoute}>
      <IndexRoute component={Editor} />
      <Route path="home" component={Home} />
    </Route>
  </Router>
);

export default appRouters;

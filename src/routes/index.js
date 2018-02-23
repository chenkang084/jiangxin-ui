import React from "react";
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  Provider
} from "react-router";
import Editor from "./editor";
import App from "./app";
import Article from "./article";
import ArticleList from "./articleList";
import Login from "./login";
import Nav from "../components/nav/nav.js";
import Home from "../components/home/home.js";

class AppRouters extends React.Component {
  handleRoute = params => {
    console.log(params);
    const content = document.getElementById("router-content");
    if (!content.className) {
      content.className = "animated bounceInRight";
      setTimeout(() => {
        content.className = "";
      }, 1000);
    }
  };

  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/login" component={Login} />
        <Route path="/" component={Nav} onChange={this.handleRoute}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="article/:id" component={Article} />
          <Route path="articles" component={ArticleList} />
        </Route>

        <Route path="/editor" component={App}>
          <IndexRoute component={Editor} />
        </Route>
      </Router>
    );
  }
}

{
  /* <Router history={browserHistory}>
  <Route path="/" component={Nav} onChange={handleRoute}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="weiStore" component={WeiStore} />
    <Route path="aboutUs" component={AboutUs} />
    <Route path="article/template" component={ArticleTemplate} />
  </Route>
</Router>; */
}

export default AppRouters;

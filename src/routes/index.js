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
import Login from "./login";
import Nav from "../components/nav/nav.js";
import Home from "../components/home/home.js";

class AppRouters extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.login();
  // }

  // state = { isLogin: false };

  // login = async () => {
  //   console.log("login");
  //   const user = await editorAxiosService.get("api/user/users");
  //   console.log(user);
  //   this.setState({ user: user });
  // };

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/login" component={Login} />

        <Route path="/" component={Nav}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="article/:id" component={Article} />
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

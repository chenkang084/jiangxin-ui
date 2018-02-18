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
        <Route path="/" component={App}>
          <IndexRoute component={Editor} />
          <Route path="article/:id" component={Article} />
        </Route>

        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

export default AppRouters;

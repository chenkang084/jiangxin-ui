import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Editor from "./editor";
import App from "./app";
import Home from "./home";
import { editorAxiosService } from "../services/axios.service";


editorAxiosService();
function handleRoute(params) {
  console.log(params);
}

class AppRouters extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { isLogin: false };

  editorPage = {
    isLogin: this.state.isLogin
  };

  editorPage = {
    login: () => {
      this.setState(prev => {
        return { editorPage: !prev.isLogin };
      });
    }
  };

  login = () => {};

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} editorPage={this.editorPage}>
          <IndexRoute component={Editor} />
          <Route path="home" component={Home} />
        </Route>
      </Router>
    );
  }
}

export default AppRouters;

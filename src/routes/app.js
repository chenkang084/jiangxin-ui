import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/header/header";

export default class App extends React.Component {
  state = {
    loginStatus: false
  };

  setLoginStatus = flag => {
    this.setState({
      loginStatus: flag
    });
  };

  render() {
    return (
      <div>
        <Header setLoginStatus={this.setLoginStatus} />
        {this.props.children &&
          React.cloneElement(this.props.children, {
            loginStatus: this.state.loginStatus
          })}
      </div>
    );
  }
}

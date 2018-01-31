import React from "react";
import ReactDOM from "react-dom";
import Login from "../components/login/login";

export default class LoginPage extends React.Component {
  componentDidMount() {
    console.log("did");
  }
  componentDidUpdate() {
    console.log("update");
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

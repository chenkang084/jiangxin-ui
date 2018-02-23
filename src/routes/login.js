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

  goHomePage = () => {
    this.props.history.push("/editor");
  };
  render() {
    return (
      <div>
        <Login goHomePage={this.goHomePage} />
      </div>
    );
  }
}

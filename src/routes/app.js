import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/header/header";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

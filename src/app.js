// require("./Squire-UI");

import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

window.onload = function() {
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById("root")
  );
};

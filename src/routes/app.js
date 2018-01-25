import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/header/header";

export default class App extends React.Component {
  render() {
    console.log(this.props.route.editorPage);

    // setTimeout(() => {
    //   this.props.route.editorPage.test();
    // }, 3000);

    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import Menu from "../menu/menu";
import SquireUI from "../SquireUI/SquireUI";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  setIframe = iframe => {
    this.iframe = iframe;
    this.editor = iframe.contentWindow.editor;

    this.actionList = {
      underline: {
        add: this.editor.underline,
        remove: this.editor.removeUnderline
      }
    };
  };

  executeAction = (action, isSelected) => {
    console.log(this.editor);

    console.log(action, isSelected);

    // this.editor.underline();
    let actionFn;
    if (isSelected) {
      actionFn = this.actionList[action] && this.actionList[action].remove;
    } else {
      actionFn = this.actionList[action] && this.actionList[action].add;
    }

    actionFn && actionFn.call(this.editor);
  };

  render() {
    return (
      <div>
        <Menu executeAction={this.executeAction} />
        <SquireUI setIframe={this.setIframe} />
      </div>
    );
  }
}

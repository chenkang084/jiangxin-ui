import React from "react";
import ReactDOM from "react-dom";
import Menu from "../menu/menu";
import SquireUI from "../SquireUI/SquireUI";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showSourceCode: false,
    editor: null
  };

  setIframe = iframe => {
    this.iframe = iframe;
    this.editor = iframe.contentWindow.editor;
    this.setState({ editor: iframe.contentWindow.editor });
    console.log(this.editor);

    this.actionList = {
      sourceCode: {
        add: () => {
          this.setState({ showSourceCode: true });
        },
        remove: () => {
          this.setState({ showSourceCode: false });
        }
      },
      bold: { add: this.editor.bold, remove: this.editor.removeBold },
      italic: { add: this.editor.italic, remove: this.editor.removeItalic },
      underline: {
        add: this.editor.underline,
        remove: this.editor.removeUnderline
      },
      strikethrough: {
        add: this.editor.strikethrough,
        remove: this.editor.removeStrikethrough
      },
      fontSize: {}
    };
  };

  executeAction = (action, isSelected) => {
    let actionFn;
    if (isSelected) {
      actionFn = this.actionList[action] && this.actionList[action].remove;
    } else {
      actionFn = this.actionList[action] && this.actionList[action].add;
    }

    actionFn && actionFn.call(this.editor);
  };

  executeDropDownAction = (action, value) => {
    // this.editor.setFontSize(`${size}px`);
    console.log(action, value);

    this.editor.setFontFace("隶书, SimLi");
  };

  render() {
    return (
      <div>
        <Menu
          executeAction={this.executeAction}
          executeDropDownAction={this.executeDropDownAction}
          editor={this.state.editor}
        />
        <SquireUI
          setIframe={this.setIframe}
          showSourceCode={this.state.showSourceCode}
        />
      </div>
    );
  }
}

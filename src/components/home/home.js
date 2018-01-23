import React from "react";
import ReactDOM from "react-dom";
import Menu from "../menu/menu";
import SquireUI from "../SquireUI/SquireUI";
import "../../../node_modules/prismjs/themes/prism.css";
const Prism = require("prismjs");
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.setIframe = this.setIframe.bind(this);
  }

  state = {
    showSourceCode: false,
    sourceCode: "",
    editor: null
  };

  setIframe = iframe => {
    this.iframe = iframe;
    this.editor = iframe.contentWindow.editor;
    this.setState({ editor: iframe.contentWindow.editor });

    this.actionList = {
      sourceCode: {
        add: () => {
          this.setState({
            showSourceCode: true,
            sourceCode: Prism.highlight(
              this.editor.getHTML(),
              Prism.languages.html
            )
          });
        },
        remove: () => {
          this.setState({ showSourceCode: false });
        }
      },
      cleanText: {
        add: () => {
          this.editor.setHTML("");
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
      fontSize: { add: this.editor.setFontSize },
      fontFamily: { add: this.editor.setFontFace },
      fontColor: { add: this.editor.setTextColour },
      fontBgColor: { add: this.editor.setHighlightColour },
      addLink: { add: this.editor.makeLink },
      addImg: { add: this.editor.insertImage },
      alignLeft: {
        add: () => {
          this.editor.setTextAlignment("left");
        },
        remove: () => {
          this.editor.setTextAlignment("left");
        }
      },
      alignCenter: {
        add: () => {
          this.editor.setTextAlignment("center");
        },
        remove: () => {
          this.editor.setTextAlignment("left");
        }
      },
      alignRight: {
        add: () => {
          this.editor.setTextAlignment("right");
        },
        remove: () => {
          this.editor.setTextAlignment("left");
        }
      }
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
    let actionFn;
    if (this.actionList[action] && this.actionList[action].add) {
      actionFn = this.actionList[action].add;
    }

    actionFn.call(this.editor, value);
  };

  executeAlign = action => {
    let actionFn;
    if (this.actionList[action] && this.actionList[action].add) {
      actionFn = this.actionList[action].add;
    }

    actionFn.call(this.editor);
  };

  render() {
    return (
      <div>
        <Menu
          executeAction={this.executeAction}
          executeAlign={this.executeAlign}
          executeDropDownAction={this.executeDropDownAction}
          editor={this.state.editor}
        />
        <SquireUI
          setIframe={this.setIframe}
          showSourceCode={this.state.showSourceCode}
          sourceCode={this.state.sourceCode}
        />
      </div>
    );
  }
}

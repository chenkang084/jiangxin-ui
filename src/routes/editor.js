import React from "react";
import ReactDOM from "react-dom";
import Menu from "../components/menu/menu";
import SquireUI from "../components/SquireUI/SquireUI";
import Title from "../components/menu/title";
import "../../node_modules/prismjs/themes/prism.css";
import {
  saveArticleToStorage,
  getArticleFromStorage,
  downloadFile
} from "../utils/artile.util";
import UploadModal from "./upload.modal";

const Prism = require("prismjs");
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showSourceCode: false,
    sourceCode: "",
    editor: null,
    title: "",
    abstract: "",
    uploadModalVisible: false
  };

  setIframe = iframe => {
    this.iframe = iframe;
    this.editor = iframe.contentWindow.editor;
    this.setState({
      editor: iframe.contentWindow.editor
    });

    const prevArticle = getArticleFromStorage();
    if (prevArticle) {
      this.editor.setHTML(prevArticle);
    }
    // saveArticleToStorage(this.editor);

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
      upLoad: {
        add: () => {
          this.handleUploadModalVisible(true);
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
      },
      download: {
        add: () => {
          console.log("...");
          const html = this.editor.getHTML();
          console.log(html);

          downloadFile("test", html);
        }
      },
      saveToLocal: {
        add: () => {
          saveArticleToStorage(this.editor.getHTML());
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

    actionFn && actionFn.call(this.editor, value);
  };

  executeAlign = action => {
    let actionFn;
    if (this.actionList[action] && this.actionList[action].add) {
      actionFn = this.actionList[action].add;
    }

    actionFn && actionFn.call(this.editor);
  };

  setTitle = (type, value) => {
    if (type) {
      switch (type) {
        case "title":
          this.setState({ title: value });
          break;
        case "abstract":
          this.setState({ abstract: value });
          break;
        default:
          break;
      }
    }
  };

  handleUploadModalVisible = flag => {
    this.setState({ uploadModalVisible: flag });
  };

  render() {
    return (
      <div>
        <section className="header">
          <div className="wrapper">
            <h1 style={{ color: "#fff" }}>酱辛公众号编辑器</h1>
          </div>
        </section>
        <Menu
          executeAction={this.executeAction}
          executeAlign={this.executeAlign}
          executeDropDownAction={this.executeDropDownAction}
          editor={this.state.editor}
          title={this.state.title}
          abstract={this.state.abstract}
        />
        <Title setTitle={this.setTitle} />
        <SquireUI
          setIframe={this.setIframe}
          showSourceCode={this.state.showSourceCode}
          sourceCode={this.state.sourceCode}
        />
        <UploadModal
          uploadModalVisible={this.state.uploadModalVisible}
          handleUploadModalVisible={this.handleUploadModalVisible}
          title={this.state.title}
          abstract={this.state.abstract}
        />
      </div>
    );
  }
}

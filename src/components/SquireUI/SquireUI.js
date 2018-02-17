import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import "../../../node_modules/highlight.js/styles/default.css";
const hljs = require("highlight.js");
export default class SquireUI extends React.Component {
  state = { showEditor: false, html: "" };

  componentDidMount() {
    const self = this;
    const SquireUI = function(options) {
      if (typeof options.buildPath == "undefined") {
        options.buildPath = "/";
      }
      // Create instance of iFrame
      var container, editor;
      if (options.replace) {
        container = document.querySelector(options.replace).parentElement;
        document.querySelector(options.replace).remove();
      } else if (options.div) {
        container = document.querySelector(options.div);
      } else {
        throw new Error("No element was defined for the editor to inject to.");
      }
      var iframe = document.createElement("iframe");
      iframe.id = "editor-wrap";
      iframe.height = options.height;
      iframe.onload = function(params) {
        // Make sure we're in standards mode.
        var doc = iframe.contentDocument;
        if (doc.compatMode !== "CSS1Compat") {
          doc.open();
          doc.write("<!DOCTYPE html><title></title>");
          doc.close();
        }
        // doc.close() can cause a re-entrant load event in some browsers,
        // such as IE9.
        if (iframe.contentWindow.editor) {
          return;
        }
        iframe.contentWindow.editor = new Squire(iframe.contentWindow.document);
        iframe.contentWindow.editor.addStyles(
          "html {" +
            "  height: 100%;" +
            "}" +
            "body {" +
            "  -moz-box-sizing: border-box;" +
            "  -webkit-box-sizing: border-box;" +
            "  box-sizing: border-box;" +
            "  height: 90%;" +
            "  padding: 1em;" +
            "  background: transparent;" +
            "  color: #2b2b2b;" +
            "  font: 13px/1.35 Helvetica, arial, sans-serif;" +
            "  cursor: text;" +
            "}" +
            "a {" +
            "  text-decoration: underline;" +
            "}" +
            "h1 {" +
            "  font-size: 138.5%;" +
            "}" +
            "h2 {" +
            "  font-size: 123.1%;" +
            "}" +
            "h3 {" +
            "  font-size: 108%;" +
            "}" +
            "h1,h2,h3,p {" +
            "  margin: 1em 0;" +
            "}" +
            "h4,h5,h6 {" +
            "  margin: 0;" +
            "}" +
            "ul, ol {" +
            "  margin: 0 1em;" +
            "  padding: 0 1em;" +
            "}" +
            "blockquote {" +
            "  border-left: 2px solid blue;" +
            "  margin: 0;" +
            "  padding: 0 10px;" +
            "}" +
            "img{" +
            "min-width:500px!important;}"
        );

        self.props.setIframe(iframe);
      };

      container.appendChild(iframe);
      iframe.contentDocument.body.setAttribute("spellcheck", false);
      return iframe.contentWindow.editor;
    };

    window.sq = new SquireUI({
      replace: "textarea#foo",
      height: 400
    });
  }

  componentDidUpdate() {
    console.log("updated");
    if (this.props.showSourceCode) {
      if (!this.state.html) {
        // 初始化state的html值
        const el = document.getElementById("source-code");
        this.setState({ html: this.props.sourceCode }, () => {
          hljs.highlightBlock(el);
        });
      }
    }
  }

  // 显示编辑panel
  showEditorPanel = () => {
    this.setState({
      showEditor: true
    });
  };

  // 保存，关闭编辑状态，重新highlight编辑结果代码
  saveEditorHtml = () => {
    this.setState({ showEditor: false });
    const el = document.getElementById("source-code");
    hljs.highlightBlock(el);
    // 通过编辑修改的源码，更新原来内容
    this.props.updateArticleBySourcecode(this.state.html);
  };

  // 同步更新编辑内容
  handleTextChange = e => {
    this.setState({
      html: e.currentTarget.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-centered"
            style={{ display: !this.props.showSourceCode ? "block" : "none" }}
          >
            <textarea id="foo" spellCheck="false" />
          </div>
          <div
            className="col-centered "
            style={{ display: this.props.showSourceCode ? "block" : "none" }}
          >
            <div
              style={{
                height: "30px",
                lineHeight: "30px",
                backgroundColor: "#f5f5f5",
                paddingRight: "40px",
                textAlign: "right"
              }}
            >
              <a onClick={this.showEditorPanel}>
                <i className="fa fa-pencil" aria-hidden="true" />
              </a>
              <a style={{ marginLeft: "15px" }} onClick={this.saveEditorHtml}>
                保存
              </a>
            </div>
            <pre
              className={classnames("html", "source-code")}
              id="source-code"
              style={{ display: !this.state.showEditor ? "block" : "none" }}
            >
              {this.state.html}
            </pre>
            <textarea
              onChange={this.handleTextChange}
              autoFocus={true}
              className={classnames("html", "source-code")}
              value={this.state.html}
              style={{ display: this.state.showEditor ? "block" : "none" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

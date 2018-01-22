import React from "react";
import ReactDOM from "react-dom";

export default class SquireUI extends React.Component {
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
            "max-width:500px!important;}"
        );

        self.props.setIframe(iframe);
      };

      container.appendChild(iframe);
      iframe.contentDocument.body.setAttribute("spellcheck", false);
      return iframe.contentWindow.editor;
    };

    window.sq = new SquireUI({ replace: "textarea#foo", height: 450 });
  }

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
            <div className="source-code" id="source-code">
              html
            </div>
          </div>
        </div>
      </div>
    );
  }
}

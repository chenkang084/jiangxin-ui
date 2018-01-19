import { checkNewFeatures } from "./new-features";

Squire.prototype.testPresenceinSelection = function(
  name,
  action,
  format,
  validation
) {
  var path = this.getPath(),
    test = validation.test(path) | this.hasFormat(format);
  if (name == action && test) {
    return true;
  } else {
    return false;
  }
};

document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  window.SquireUI = function(options) {
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
    var div = document.createElement("div");
    div.className = "Squire-UI";
    iframe.height = options.height;

    div.innerHTML = require("../build/Squire-UI.html");

    iframe.addEventListener("load", function() {
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
      iframe.contentWindow.editor.addStyles("html {" + "  height: 100%;" + "}" + "body {" + "  -moz-box-sizing: border-box;" + "  -webkit-box-sizing: border-box;" + "  box-sizing: border-box;" + "  height: 90%;" + "  padding: 1em;" + "  background: transparent;" + "  color: #2b2b2b;" + "  font: 13px/1.35 Helvetica, arial, sans-serif;" + "  cursor: text;" + "}" + "a {" + "  text-decoration: underline;" + "}" + "h1 {" + "  font-size: 138.5%;" + "}" + "h2 {" + "  font-size: 123.1%;" + "}" + "h3 {" + "  font-size: 108%;" + "}" + "h1,h2,h3,p {" + "  margin: 1em 0;" + "}" + "h4,h5,h6 {" + "  margin: 0;" + "}" + "ul, ol {" + "  margin: 0 1em;" + "  padding: 0 1em;" + "}" + "blockquote {" + "  border-left: 2px solid blue;" + "  margin: 0;" + "  padding: 0 10px;" + "}" + "img{" + "max-width:500px!important;}");
    });

    container.append(div);
    container.append(iframe);
    return iframe.contentWindow.editor;
  };
}); 


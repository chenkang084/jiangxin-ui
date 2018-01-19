$(document).ready(function() {
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
  SquireUI = function(options) {
    if (typeof options.buildPath == "undefined") {
      options.buildPath = "/";
    }
    // Create instance of iFrame
    var container, editor;
    if (options.replace) {
      container = $(options.replace).parent();
      $(options.replace).remove();
    } else if (options.div) {
      container = $(options.div);
    } else {
      throw new Error("No element was defined for the editor to inject to.");
    }
    var iframe = document.createElement("iframe");
    iframe.id = "editor-wrap";
    var div = document.createElement("div");
    div.className = "Squire-UI";
    iframe.height = options.height;

    $(div).load(options.buildPath + "Squire-UI.html", function() {
      this.linkDrop = new Drop({
        target: $("#makeLink").first()[0],
        content: $("#drop-link").html(),
        position: "bottom center",
        openOn: "click"
      });

      this.linkDrop.on("open", function() {
        $(".quit").click(function() {
          $(this)
            .parent()
            .parent()
            .removeClass("drop-open");
        });

        $(".submitLink").click(function() {
          var editor = iframe.contentWindow.editor;
          editor.makeLink(
            $(this)
              .parent()
              .children("#url")
              .first()
              .val()
          );
          $(this)
            .parent()
            .parent()
            .removeClass("drop-open");
          $(this)
            .parent()
            .children("#url")
            .attr("value", "");
        });
      });

      this.imageDrop = new Drop({
        target: $("#insertImage").first()[0],
        content: $("#drop-image").html(),
        position: "bottom center",
        openOn: "click"
      });

      this.imageDrop.on("open", function() {
        $(".quit")
          .unbind()
          .click(function() {
            $(this)
              .parent()
              .parent()
              .removeClass("drop-open");
          });

        $(".sumbitImageURL")
          .unbind()
          .click(function() {
            console.log("Passed through .sumbitImageURL");
            var editor = iframe.contentWindow.editor;
            url = $(this)
              .parent()
              .children("#imageUrl")
              .first()[0];
            editor.insertImage(url.value);
            $(this)
              .parent()
              .parent()
              .removeClass("drop-open");
            $(this)
              .parent()
              .children("#imageUrl")
              .attr("value", "");
          });
      });

      this.fontDrop = new Drop({
        target: $("#selectFont").first()[0],
        content: $("#drop-font").html(),
        position: "bottom center",
        openOn: "click"
      });

      this.fontDrop.on("open", function() {
        $(".quit").click(function() {
          $(this)
            .parent()
            .parent()
            .removeClass("drop-open");
        });

        $(".submitFont")
          .unbind()
          .click(function() {
            var editor = iframe.contentWindow.editor;
            var selectedFonts = $("select#fontSelect option:selected")
              .last()
              .data("fonts");
            var fontSize =
              $("select#textSelector option:selected")
                .last()
                .data("size") + "px";
            editor.setFontSize(fontSize);

            try {
              editor.setFontFace(selectedFonts);
            } catch (e) {
              alert("Please make a selection of text.");
            } finally {
              $(this)
                .parent()
                .parent()
                .removeClass("drop-open");
            }
          });
      });

      this.colorDrop = new Drop({
        target: $("#selectColor").first()[0],
        content: $("#drop-color").html(),
        position: "bottom center",
        openOn: "click"
      });

      this.colorDrop.on("open", function() {
        var editor = iframe.contentWindow.editor;

        $("#color-select-panel a").unbind("click");

        $("#color-select-panel a").click(function(e) {
          editor.setTextColour(this.dataset.color);
          $(this)
            .parents("table")
            .parent()
            .parent()
            .removeClass("drop-open");
        });
      });

      this.colorBgDrop = new Drop({
        target: $("#selectBgColor").first()[0],
        content: $("#drop-color").html(),
        position: "bottom center",
        openOn: "click"
      });

      this.colorBgDrop.on("open", function() {
        var editor = iframe.contentWindow.editor;

        $("#color-select-panel a").unbind("click");

        $("#color-select-panel a").click(function(e) {
          editor.setHighlightColour(this.dataset.color);
          $(this)
            .parents("table")
            .parent()
            .parent()
            .removeClass("drop-open");
        });
      });

      $(".item").click(function() {
        var iframe = $(this)
          .parents(".Squire-UI")
          .next("iframe")
          .first()[0];
        var editor = iframe.contentWindow.editor;
        var action = $(this).data("action");

        test = {
          value: $(this).data("action"),
          testBold: editor.testPresenceinSelection("bold", action, "B", />B\b/),
          testItalic: editor.testPresenceinSelection(
            "italic",
            action,
            "I",
            />I\b/
          ),
          testUnderline: editor.testPresenceinSelection(
            "underline",
            action,
            "U",
            />U\b/
          ),
          testStrikethrough: editor.testPresenceinSelection(
            "strikethrough",
            action,
            "S",
            />S\b/
          ),
          testOrderedList: editor.testPresenceinSelection(
            "makeOrderedList",
            action,
            "OL",
            />OL\b/
          ),
          testLink: editor.testPresenceinSelection(
            "makeLink",
            action,
            "A",
            />A\b/
          ),
          testQuote: editor.testPresenceinSelection(
            "increaseQuoteLevel",
            action,
            "blockquote",
            />blockquote\b/
          ),
          isNotValue: function(a) {
            return a == action && this.value !== "";
          }
        };

        editor.alignRight = function() {
          editor.setTextAlignment("right");
        };
        editor.alignCenter = function() {
          editor.setTextAlignment("center");
        };
        editor.alignLeft = function() {
          editor.setTextAlignment("left");
        };
        editor.alignJustify = function() {
          editor.setTextAlignment("justify");
        };
        editor.makeHeading = function() {
          editor.setFontSize("2em");
          editor.bold();
        };

        if (
          test.testBold |
          test.testItalic |
          test.testUnderline |
          test.testStrikethrough |
          test.testOrderedList |
          test.testLink |
          test.testQuote
        ) {
          if (test.testBold) editor.removeBold();
          if (test.testItalic) editor.removeItalic();
          if (test.testUnderline) editor.removeUnderline();
          if (test.testStrikethrough) editor.removeStrikethrough();
          if (test.testLink) editor.removeLink();
          if (test.testOrderedList) editor.removeList();
          if (test.testQuote) editor.decreaseQuoteLevel();
        } else if (
          test.isNotValue("makeLink") |
          test.isNotValue("insertImage") |
          test.isNotValue("selectFont") |
          test.isNotValue("selectColor")
        ) {
          // do nothing these are dropdowns.
        } else {
          editor[action]();
          editor.focus();
        }
      });
    });

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
    });

    $(container).append(div);
    $(container).append(iframe);

    return iframe.contentWindow.editor;
  };
});

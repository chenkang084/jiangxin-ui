import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import DropDown from "./dropDown";
import "antd/dist/antd.css";
import { Popover, Button } from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default class Menus extends React.Component {
  constructor(props) {
    super(props);
  }

  menusList = [
    {
      groupName: "",
      subItems: [
        {
          icon: <i className="fa fa-html5" aria-hidden="true" />,
          dataAction: "sourceCode",
          title: "查看源代码"
        }
      ]
    },
    {
      subItems: [
        {
          icon: <i className="fa fa-bold" />,
          dataAction: "bold",
          title: "字体加粗"
        },
        {
          icon: <i className="fa fa-italic" />,
          dataAction: "italic",
          title: "字体倾斜"
        },
        {
          icon: <i className="fa fa-underline" />,
          dataAction: "underline",
          title: "下划线"
        },
        {
          icon: <i className="fa fa-strikethrough" />,
          dataAction: "strikethrough",
          title: "中划线"
        },
        {
          type: "dropDown",
          icon: <i className="fa fa-font" />,
          dataAction: "selectFont",
          title: "字体"
        }
      ]
    }
  ];

  handleItemEvent = e => {
    const action = e.currentTarget.dataset.action;
    const isSelected = e.currentTarget.classList.contains("item-selected");

    if (isSelected) {
      e.currentTarget.classList.remove("item-selected");
    } else {
      e.currentTarget.classList.add("item-selected");
    }

    this.props.executeAction(action, isSelected);
  };

  componentDidMount() {
    console.log(".......");
    const self = this;

    const drop = new Drop({
      target: document.getElementById("selectFont"),
      content: document.getElementById("drop-font").innerHTML,
      position: "bottom center",
      openOn: "click"
    });

    drop.on("open", function(e) {
      // $(".quit").click(function() {
      //   $(this)
      //     .parent()
      //     .parent()
      //     .removeClass("drop-open");
      // });

      console.log(self.props.editor);

      // $(".submitFont")
      //   .unbind()
      //   .click(function() {
      //     var editor = iframe.contentWindow.editor;
      //     var selectedFonts = $("select#fontSelect option:selected")
      //       .last()
      //       .data("fonts");
      //     var fontSize =
      //       $("select#textSelector option:selected")
      //         .last()
      //         .data("size") + "px";
      //     editor.setFontSize(fontSize);

      //     try {
      //       editor.setFontFace(selectedFonts);
      //     } catch (e) {
      //       alert("Please make a selection of text.");
      //     } finally {
      //       $(this)
      //         .parent()
      //         .parent()
      //         .removeClass("drop-open");
      //     }
      //   });
    });
  }

  render() {
    return <div>
        <div className="menu">
          {this.menusList.map((group, index) => {
            return <div className="group" key={index}>
                {group.subItems && group.subItems.length > 0 && group.subItems.map(
                    action => {
                      return (
                        <div
                          className="item"
                          key={action.dataAction}
                          data-action={action.dataAction}
                          title={action.title}
                          id={action.dataAction}
                          onClick={e => {
                            this.handleItemEvent(e);
                          }}
                        >
                          {action.icon}
                        </div>
                      );
                    }
                  )}
              </div>;
          })}
        </div>

        <Popover content={content} placement="bottom" title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>

        <DropDown />
      </div>;
  }
}

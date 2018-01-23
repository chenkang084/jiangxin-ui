import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import "antd/dist/antd.css";
import { Popover, Button, Select } from "antd";
import {
  FontFamily,
  FontSize,
  FontColor,
  FontBgColor,
  SetHrefLink,
  SetImgLink
} from "./fontDropdown";

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
          render: () => {
            return <FontFamily handleEvent={this.handleDropDown} />;
          },
          dataAction: "fontFamily",
          title: "字体"
        },
        {
          type: "dropDown",
          render: () => {
            return <FontSize handleEvent={this.handleDropDown} />;
          },
          dataAction: "fontSize",
          title: "字号"
        },
        {
          type: "dropDown",
          icon: <i className="fa fa-paint-brush" aria-hidden="true" />,
          dataAction: "fontColor",
          title: "文字颜色",
          render: () => {
            return <FontColor handleEvent={this.handleDropDown} />;
          }
        },
        {
          type: "dropDown",
          icon: <i className="fa fa-paint-brush" aria-hidden="true" />,
          dataAction: "fontBgColor",
          title: "文字背景色",
          render: () => {
            return <FontBgColor handleEvent={this.handleDropDown} />;
          }
        }
      ]
    },
    {
      groupName: "",
      subItems: [
        {
          type: "dropDown",
          dataAction: "addLink",
          title: "超链接",
          render: () => {
            return <SetHrefLink handleEvent={this.handleDropDown} />;
          }
        },
        {
          type: "dropDown",
          dataAction: "addImg",
          title: "插入图片",
          render: () => {
            return <SetImgLink handleEvent={this.handleDropDown} />;
          }
        }
      ]
    },
    {
      groupName: "",
      subItems: [
        {
          type: "align",
          icon: <i className="fa fa-align-left" />,
          title: "居左",
          dataAction: "alignLeft"
        },
        {
          type: "align",
          icon: <i className="fa fa-align-center" />,
          title: "居中",
          dataAction: "alignCenter"
        },
        {
          type: "align",
          icon: <i className="fa fa-align-right" />,
          title: "居右",
          dataAction: "alignRight"
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

  handleAlignEvent = e => {
    const action = e.currentTarget.dataset.action;
    this.props.executeAlign(action);
  };

  handleDropDown = (action, value) => {
    this.props.executeDropDownAction(action, value);
  };

  componentDidMount() {

  }

  renderItem = action => {
    if (action.type === "dropDown") {
      return (
        <div className="dropdown-wrap" key={action.dataAction}>
          {action.render.call(this)}
        </div>
      );
    } else if (action.type === "align") {
      return (
        <div
          className="item"
          key={action.dataAction}
          data-action={action.dataAction}
          title={action.title}
          id={action.dataAction}
          onClick={e => {
            this.handleAlignEvent(e);
          }}
        >
          {action.icon}
        </div>
      );
    } else {
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
  };

  render() {
    return (
      <div>
        <div className="menu">
          {this.menusList.map((group, index) => {
            return (
              <div className="group" key={index}>
                {group.subItems &&
                  group.subItems.length > 0 &&
                  group.subItems.map(action => {
                    {
                      return this.renderItem(action);
                    }
                  })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

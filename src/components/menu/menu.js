import React from "react";
import ReactDOM from "react-dom";

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
    console.log(e);
  };

  render() {
    return (
      <div className="menu">
        {this.menusList.map((group, index) => {
          return (
            <div className="group" key={index}>
              {group.subItems &&
                group.subItems.length > 0 &&
                group.subItems.map(action => {
                  return (
                    <div
                      className="item"
                      key={action.dataAction}
                      data-action={action.dataAction}
                      title={action.title}
                      onClick={e => {
                        this.handleItemEvent(e);
                      }}
                    >
                      {action.icon}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
import { Select, Row, Col, Popover } from "antd";
const Option = Select.Option;

const FontSize = props => {
  function handleChange(value) {
    props.handleEvent("fontSize", value + "px");
  }

  return (
    <Select onChange={handleChange} defaultValue="12" style={{ width: 80 }}>
      <Option value="12">12px</Option>
      <Option value="14">14px</Option>
      <Option value="16">16px</Option>
      <Option value="18">18px</Option>
      <Option value="20">20px</Option>
      <Option value="22">22px</Option>
      <Option value="24">24px</Option>
      <Option value="26">26px</Option>
      <Option value="28">28px</Option>
      <Option value="30">30px</Option>
      <Option value="32">32px</Option>
      <Option value="34">34px</Option>
    </Select>
  );
};

const FontFamily = props => {
  function handleChange(value) {
    props.handleEvent("fontFamily", value);
  }

  return (
    <Select
      onChange={handleChange}
      defaultValue="微软雅黑"
      style={{ width: 120 }}
    >
      <Option value="微软雅黑">微软雅黑</Option>
      <Option value="宋体, SimSun">宋体</Option>
      <Option value="黑体, SimHei">黑体</Option>
      <Option value="楷体, 楷体_GB2312, SimKai">楷体</Option>
      <Option value="隶书, SimLi">隶书</Option>
      <Option value="georgia">Georgia</Option>
      <Option value="arial">Arial</Option>
      <Option value="helvetica, arial">Helvetica</Option>
      <Option value="menlo, consolas, courier new, monospace">Monospace</Option>
      <Option value="\&quot; Times New Roman\ &quot;, times">
        Times New Roman
      </Option>
      <Option value="tahoma, sans-serif">Tahoma</Option>
      <Option value="\&quot; Trebuchet MS\ &quot;">Trebuchet MS</Option>
      <Option value="verdana">Verdana</Option>
    </Select>
  );
};

const FontColor = props => {
  return (
    <SetColor
      action={"fontColor"}
      icon={<i className="fa fa-paint-brush" aria-hidden="true" />}
      handleEvent={props.handleEvent}
    />
  );
};

const FontBgColor = props => {
  return (
    <SetColor
      action={"fontBgColor"}
      icon={<i className="fa fa-pencil-square" aria-hidden="true" />}
      handleEvent={props.handleEvent}
    />
  );
};

const SetColor = props => {
  function handleColor(e) {
    const color = e.target.getAttribute("title");
    props.handleEvent(props.action, "#" + color);
  }

  const content = (
    <div id="drop-color">
      <table
        onClick={handleColor}
        id="color-select-panel"
        className="edui-box edui-default"
        style={{ borderCollapse: "collapse" }}
        cellSpacing="0"
        cellPadding="0"
      >
        <tbody className="edui-default">
          <tr className="edui-colorpicker-tablefirstrow edui-default">
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ffffff"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ffffff"
                style={{
                  backgroundColor: "#ffffff",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ffd7d5"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ffd7d5"
                style={{
                  backgroundColor: "#ffd7d5",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ffdaa9"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ffdaa9"
                style={{
                  backgroundColor: "#ffdaa9",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="fffed5"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#fffed5"
                style={{
                  backgroundColor: "#fffed5",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="d4fa00"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#d4fa00"
                style={{
                  backgroundColor: "#d4fa00",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="73fcd6"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#73fcd6"
                style={{
                  backgroundColor: "#73fcd6",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="a5c8ff"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#a5c8ff"
                style={{
                  backgroundColor: "#a5c8ff",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ffacd5"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ffacd5"
                style={{
                  backgroundColor: "#ffacd5",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ff7faa"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ff7faa"
                style={{
                  backgroundColor: "#ff7faa",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
          </tr>
          <tr className="edui-default">
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="d6d6d6"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#d6d6d6"
                style={{
                  backgroundColor: "#d6d6d6",
                  border: "solid #e7e7eb",
                  borderWidth: "1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ffacaa"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ffacaa"
                style={{
                  backgroundColor: "#ffacaa",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ffb995"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ffb995"
                style={{
                  backgroundColor: "#ffb995",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="fffb00"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#fffb00"
                style={{
                  backgroundColor: "#fffb00",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="73fa79"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#73fa79"
                style={{
                  backgroundColor: "#73fa79",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="00fcff"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#00fcff"
                style={{
                  backgroundColor: "#00fcff",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="78acfe"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#78acfe"
                style={{
                  backgroundColor: "#78acfe",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="d84fa9"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#d84fa9"
                style={{
                  backgroundColor: "#d84fa9",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ff4f79"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ff4f79"
                style={{
                  backgroundColor: "#ff4f79",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
          </tr>
          <tr className="edui-default">
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="b2b2b2"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#b2b2b2"
                style={{
                  backgroundColor: "#b2b2b2",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="d7aba9"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#d7aba9"
                style={{
                  backgroundColor: "#d7aba9",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ff6827"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ff6827"
                style={{
                  backgroundColor: "#ff6827",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ffda51"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ffda51"
                style={{
                  backgroundColor: "#ffda51",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="00d100"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#00d100"
                style={{
                  backgroundColor: "#00d100",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="00d5ff"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#00d5ff"
                style={{
                  backgroundColor: "#00d5ff",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="0080ff"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#0080ff"
                style={{
                  backgroundColor: "#0080ff",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ac39ff"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ac39ff"
                style={{
                  backgroundColor: "#ac39ff",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ff2941"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ff2941"
                style={{
                  backgroundColor: "#ff2941",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
          </tr>
          <tr className="edui-default">
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="888888"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#888888"
                style={{
                  backgroundColor: "#888888",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="7a4442"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#7a4442"
                style={{
                  backgroundColor: "#7a4442",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ff4c00"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ff4c00"
                style={{
                  backgroundColor: "#ff4c00",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ffa900"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ffa900"
                style={{
                  backgroundColor: "#ffa900",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="3da742"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#3da742"
                style={{
                  backgroundColor: "#3da742",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="3daad6"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#3daad6"
                style={{
                  backgroundColor: "#3daad6",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="0052ff"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#0052ff"
                style={{
                  backgroundColor: "#0052ff",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="7a4fd6"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#7a4fd6"
                style={{
                  backgroundColor: "#7a4fd6",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="d92142"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#d92142"
                style={{
                  backgroundColor: "#d92142",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
          </tr>
          <tr className="edui-default">
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="000000"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#000000"
                style={{
                  backgroundColor: "#000000",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="7b0c00"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#7b0c00"
                style={{
                  backgroundColor: "#7b0c00",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ff4c41"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ff4c41"
                style={{
                  backgroundColor: "#ff4c41",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="d6a841"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#d6a841"
                style={{
                  backgroundColor: "#d6a841",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="407600"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#407600"
                style={{
                  backgroundColor: "#407600",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="007aaa"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#007aaa"
                style={{
                  backgroundColor: "#007aaa",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="021eaa"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#021eaa"
                style={{
                  backgroundColor: "#021eaa",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="797baa"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#797baa"
                style={{
                  backgroundColor: "#797baa",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
            <td style={{ padding: "2px" }} className="edui-default">
              <a
                hidefocus=""
                title="ab1942"
                href="javascript:"
                unselectable="on"
                className="edui-box edui-colorpicker-colorcell edui-default"
                data-color="#ab1942"
                style={{
                  backgroundColor: "#ab1942",
                  border: "solid #e7e7eb",
                  borderWidth: "1px 1px 1px 1px"
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <Popover placement="bottom" content={content} trigger="hover">
      <div
        title="字体颜色"
        id="selectColor"
        data-action="selectColor"
        className="item"
        style={{ margin: "-5px -4px 0 -4px" }}
      >
        {props.icon}
      </div>
    </Popover>
  );
};

export { FontFamily, FontSize, FontColor, FontBgColor };

import React from "react";
import ReactDOM from "react-dom";
import { Select, Row, Col } from "antd";
const Option = Select.Option;

const FontSize = props => {
  console.log(props);

  function handleChange(value) {
    props.handleEvent("fontSize", value);
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
  console.log(props);

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

export { FontFamily, FontSize };

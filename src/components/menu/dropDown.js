import React from "react";
import ReactDOM from "react-dom";

export default class DropDown extends React.Component {
  render() {
    return (
      <div className="templates hidden">
        <div id="drop-font">
          <strong>Change Font</strong>
          <i className="fa fa-chevron-up quit" />
          <br /> Text Size:
          <select id="textSelector">
            <option data-size="12">12</option>
            <option data-size="14">14</option>
            <option data-size="16">16</option>
            <option data-size="18">18</option>
            <option data-size="20">20</option>
            <option data-size="22">22</option>
            <option data-size="24">24</option>
            <option data-size="26">26</option>
            <option data-size="28">28</option>
            <option data-size="30">30</option>
            <option data-size="32">32</option>
            <option data-size="34">34</option>
          </select>
          <br /> Font:
          <select id="fontSelect">
            <option data-fonts="微软雅黑">微软雅黑</option>
            <option data-fonts="宋体, SimSun">宋体</option>
            <option data-fonts="黑体, SimHei">黑体</option>
            <option data-fonts="楷体, 楷体_GB2312, SimKai">楷体</option>
            <option data-fonts="隶书, SimLi">隶书</option>
            <option data-fonts="georgia">Georgia</option>
            <option data-fonts="arial">Arial</option>
            <option data-fonts="helvetica, arial">Helvetica</option>
            <option data-fonts="menlo, consolas, courier new, monospace">
              Monospace
            </option>
            <option data-fonts="\&quot; Times New Roman\ &quot;, times">
              Times New Roman
            </option>
            <option data-fonts="tahoma, sans-serif">Tahoma</option>
            <option data-fonts="\&quot; Trebuchet MS\ &quot;">
              Trebuchet MS
            </option>
            <option data-fonts="verdana">Verdana</option>
          </select>
          <br />
          <div className="btn submitFont">Apply</div>
        </div>

        <div id="drop-link">
          <strong>Insert Link</strong>
          <i className="fa fa-chevron-up quit" />
          <input placeholder="Link URL" type="text" id="url" />
          <div className="btn submitLink">Insert</div>
        </div>
        <div id="drop-image">
          <strong>Insert Image</strong>
          <i className="fa fa-chevron-up quit" />
          <input placeholder="Image URL" type="text" id="imageUrl" />
          <div className="btn sumbitImageURL">Insert</div>
        </div>

        <div id="drop-color">
          <table
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
      </div>
    );
  }
}

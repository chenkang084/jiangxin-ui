import { savelocalStorage, getLocalStorage } from "./storage.util";
import { message } from "antd";

const saveArticleToStorage = html => {
  // const interval = 10000;
  // setInterval(() => {

  // }, interval);
  savelocalStorage("article", html);
  message.success("内容已保存");
};

const getArticleFromStorage = () => {
  return getLocalStorage("article");
};

const downloadFile = (filename, text) => {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename + ".html");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export { saveArticleToStorage, getArticleFromStorage, downloadFile };

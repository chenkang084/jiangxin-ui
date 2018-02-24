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

const addMetaReferrer = () => {
  const metas = [...document.querySelectorAll("meta")];

  const referrer = metas.filter(meta => {
    return meta.name && meta.name === "referrer";
  });

  if (referrer.length === 0) {
    let meta = document.createElement("meta");
    meta.name = "referrer";
    meta.content = "never";
    document.getElementsByTagName("head")[0].appendChild(meta);
  }
};

const removeMetaReferrer = () => {
  const metas = [...document.querySelectorAll("meta")];

  const referrer = metas.filter(meta => {
    return meta.name && meta.name === "referrer";
  });

  if (referrer.length > 0) {
    document.getElementsByTagName("head")[0].removeChild(referrer[0]);
  }
};

export {
  saveArticleToStorage,
  getArticleFromStorage,
  downloadFile,
  addMetaReferrer,
  removeMetaReferrer
};

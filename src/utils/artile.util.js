import { savelocalStorage, getLocalStorage } from "./storage.util";
import { message } from "antd";

const saveArticleToStorage = editor => {
  const interval = 10000;
  setInterval(() => {
    savelocalStorage("article", editor.getHTML());

    message.success("内容已保存");
  }, interval);
};

const getArticleFromStorage = () => {
  return getLocalStorage("article");
};

export { saveArticleToStorage, getArticleFromStorage };

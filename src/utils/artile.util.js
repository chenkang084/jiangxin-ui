import { savelocalStorage, getLocalStorage } from "./storage.util";

const saveArticleToStorage = editor => {
  const interval = 5000;
  setInterval(() => {
    savelocalStorage("article", editor.getHTML());
  }, interval);
};

const getArticleFromStorage = () => {
  return getLocalStorage("article");
};

export { saveArticleToStorage, getArticleFromStorage };

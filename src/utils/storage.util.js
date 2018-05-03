export const saveSessionStorage = (key, item) => {
  if (!key) {
    throw new TypeError("the key can't be  null in saveSessionStorge function");
  }
  sessionStorage.setItem(key, JSON.stringify(item));
};

export const getSessionStorage = (key) => {
  if (!key) {
    throw new TypeError("the key can't be  null in getSessionStorge function");
  }
  return JSON.parse(sessionStorage.getItem(key));
};

export const removeSessionStorage = (key) => {
  if (!key) {
    throw new TypeError(
      "the key can't be  null in removeSessionStorage function",
    );
  }
  sessionStorage.removeItem(key);
};

export const clearSessionStorage = () => {
  sessionStorage.clear();
};

export const savelocalStorage = (key, item = {}) => {
  if (!key) {
    throw new TypeError("the key can't be  null in savelocalStorge function");
  }
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key) => {
  if (!key) {
    throw new TypeError("the key can't be  null in getLocalStorage function");
  }
  return JSON.parse(localStorage.getItem(key));
};

export const removeLocalStorage = (key) => {
  if (!key) {
    throw new TypeError(
      "the key can't be  null in removeLocalStorage function",
    );
  }
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

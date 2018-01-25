import axios from "axios";
import config from "../config/index";

console.log(config.app);

let axiosInstance;
let editorAxiosInstance;

const generateAxios = (
  $config = {
    // baseURL: config.components.ceph,
    headers: { "X-Requested-With": "XMLHttpRequest" }
  }
) => {
  return axios.create($config);
};

export const axiosService = () => {
  if (!axiosInstance) {
    generateAxios();
  }
  return axiosInstance;
};

export const editorAxiosService = () => {
  if (!editorAxiosInstance) {
    generateAxios({ baseURL: config.uri.editor.api });
  }
  return editorAxiosInstance;
};

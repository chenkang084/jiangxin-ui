import axios from "axios";
import config from "../config/index";

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

export const axiosService = generateAxios();

export const editorAxiosService = generateAxios({
  baseURL: config.uri.editor.api
});

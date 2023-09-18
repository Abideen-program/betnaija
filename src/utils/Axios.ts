import axios from "axios";
import constant from "./Constant";

let instance = axios.create({
  baseURL: constant.baseUrl + "api/v1/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
  },

  validateStatus: (status: number): boolean => {
    return status >= 200 && status < 500;
  },
});

// instance.defaults.withCredentials = true;
instance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      localStorage.clear();
      window.location.href = "/auth-login";
    }

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/auth-login";
    }

    return Promise.reject(error);
  }
);

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("_newToken")}`;
  return config;
});

export default instance;

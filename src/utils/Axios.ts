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

export default instance;

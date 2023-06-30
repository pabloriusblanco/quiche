import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    "Allow-Cross-Origin": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

export const apiUpload = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Allow-Cross-Origin": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authorization");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

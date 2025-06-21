// lib/axios.js
import { NEXT_PUBLIC_API_URL } from "@/constant/envs";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
  timeout: 50000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

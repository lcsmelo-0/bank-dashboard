import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { COOKIE_TOKEN, Routes } from "@/constants";

const axiosInstance = axios.create({
  baseURL: "/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get(COOKIE_TOKEN);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const router = useRouter();

    if (error.response && error.response.status === 401) {
      Cookies.remove(COOKIE_TOKEN);
      router.push(Routes.LOGIN);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

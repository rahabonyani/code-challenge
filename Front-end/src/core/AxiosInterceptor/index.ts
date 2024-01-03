import axios, { AxiosInstance, AxiosStatic } from "axios";
import { getCookie } from "cookies-next";

let isInstalledOnStaticObject = false;

export const installInterceptor = (axios: AxiosInstance | AxiosStatic) => {
  const authToken = getCookie("auth-token");

  axios.interceptors.request.use(
    async (config) => {
      config.baseURL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:5000/api/"
          : "";
      config.headers.Authorization = authToken;
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      return Promise.reject(error);
    }
  );
};

if (!isInstalledOnStaticObject) {
  isInstalledOnStaticObject = true;
  installInterceptor(axios);
}

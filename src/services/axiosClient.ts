import axios, { AxiosInstance } from "axios";
import axiosDefaultConfig from "./axiosDefaultConfig";

export default class RestClient {
  // Config will be used by this service
  axiosConfig = { ...axiosDefaultConfig };

  // Axios Instance
  public static axiosIns: AxiosInstance;

  // Base URL to API calls
  constructor(public baseURL: string) {}

  createClient() {
    const client = axios.create({
      baseURL: this.baseURL,
    });

    client.defaults.headers.common["Content-Type"] =
      "application/json; charset=utf-8";
    client.defaults.headers.common.Accept = "application/json; charset=utf-8";

    RestClient.axiosIns = client;
  }

  // Request Interceptor
  // private initializeRequestInterceptor = () => {
  //   RestClient.axiosIns.interceptors.request.use(
  //     (config: AxiosRequestConfig) => {
  //       return config;
  //     },
  //     (error: AxiosError): Promise<AxiosError> => {
  //       console.error(`[request error] [${JSON.stringify(error)}]`);
  //       return Promise.reject(error);
  //     }
  //   );
  // };
}

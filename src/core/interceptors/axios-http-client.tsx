import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { enviroment } from "../variables/enviroment";
const axios = require("axios");
const axiosApiInstance = axios.create();

const httpStatusCodes: { code: number; message: string }[] = [
  { code: 301, message: "Kaynak kalıcı olarak taşındı" },
  { code: 302, message: "Kaynak geçici olarak taşındı" },
  { code: 401, message: "Giriş Yapılamadı" },
  { code: 404, message: "Kaynak Bulunamadı" },
  { code: 405, message: "İzin verilmeyen metod" },
  { code: 406, message: "Kabul edilemeyen accept header" },
  { code: 407, message: "Proxy üzerinden yetkilendirme gerekli" },
  { code: 408, message: "İstek zaman aşımına uğradı" },
  { code: 409, message: "İstek içerisinde çelişki var" },
  { code: 410, message: "Kaynak yok" },
  { code: 500, message: "Sunucuda bir hata oluştu ve istek karşılanamadı" },
  { code: 503, message: "Sunucu şu anda hizmet veremiyor" },
  { code: 504, message: "Gateway veya Proxy sunucusu zaman aşımına uğradı" },
];

const onRequest = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {

  const bearerToken: any = ""; ///await getStoreData(Configs.TOKEN);


  //Generally base url could be one.  This condition coded only this assignment
  if (config.url?.includes("login")) {
    config.url = enviroment.LOGIN_BASE_URL + config.url; 
    return config;
  } else {
    config.url = enviroment.COUNTRY_BASE_URL + config.url;
    config.headers = { Authorization: `Bearer ${bearerToken}` };
    return config;
  }




  

  
  //config.params && { ...config.params, ...config.params };


  const language: any = "tr-TR"; //default languageSetting

  config.headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    language: `${language}-${language?.toUpperCase()}`,
  };

  
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject({
    status: error.response?.status,
    errors: "",
  });

  //console.log(`[response error] [${JSON.stringify(error)}]`);

  // let errors = ["Something went wrong, please try again!"];
  // var knownMessage="";
  // if (error.response) {
  //     if (error.response.data.errors)
  //         errors = error.response.data.errors;
  //     if (error.response.data.error)
  //         errors = [error.response.data.error];

  //     const knownHttpErrorCode = httpStatusCodes.find(c => c.code === error.response?.status);
  //     if (knownHttpErrorCode) {
  //         knownMessage = `${knownHttpErrorCode.code}: ${knownHttpErrorCode.message}`;
  //         //TODO:show on toaster
  //     }
  //     if (error?.response?.status === 401) {

  //         RootNavigation.navigate('Login', { });
  //         return Promise.reject({
  //             status: 401,
  //             errors: []
  //         });

  //     }

  // } else if (error.request) {

  // } else {

  // }

  // if (error?.response?.status === 401) {

  //     RootNavigation.navigate('Login', { });
  //     return Promise.reject({
  //         status: 401,
  //         errors: []
  //     });

  // }else{

  //     return Promise.reject({
  //         status: error.response?.status,
  //         errors: errors
  //     });
  // }
};

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

export const AxiosHttpClient = setupInterceptorsTo(axiosApiInstance);

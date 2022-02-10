/*
 * @Descripttion:
 * @version:
 * @Author: seven
 * @Date: 2019-09-03 19:21:19
 * @LastEditors: wanglong
 * @LastEditTime: 2021-12-15 09:59:07
 */
import axios from "axios";
import { Notify } from "vant";
import { Toast } from "vant";
import store from "@/store";
import { getToken, setToken } from "@/utils/auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000, // request timeout
});

var isBack = undefined;
// request interceptor
service.interceptors.request.use(
  (config) => {
    if (config.looding) {
      Toast.loading({
        message: "请稍后...",
        forbidClick: true,
        duration: 0,
      });
    }
    isBack = config.isBack;
    if (getToken() != null && getToken() != "null" && getToken() != "" && getToken() != undefined && getToken() != "undefined") {
      config.headers["wxToken"] = getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    Toast.clear();
    const res = response.data;
    if (res.code === 200) {
      return response.data;
    } else if (res.code === 202 && isBack) {
      return response.data;
    } else if (res.code === 501 && isBack) {
      return Promise.reject(res);
    } else if (res.code == 302) {
      return Promise.reject(res);
    } else if (res.code == 0) {
      store.dispatch("loginUrl");
    } else {
      Notify({ type: "warning", message: res.msg || res.message || "error" });
      Toast.clear();
      return Promise.reject(res || "error");
    }
  },
  (error) => {
    Toast.clear();
    Notify({ type: "warning", message: "访问异常" });
    return Promise.reject(error);
  }
);

export default service;

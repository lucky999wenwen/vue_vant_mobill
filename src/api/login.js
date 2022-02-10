/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-02-01 15:02:15
 * @LastEditors: wanglong
 * @LastEditTime: 2021-10-27 14:10:16
 */
import request from "@/plugin/axios";

//登录
export function login(code, type) {
  return request({
    url: "/wx/login/" + code + "/" + type,
    method: "get",
    looding: true,
  });
}

export function loginUrl() {
  return request({
    url: "/wx/login/url",
    method: "get",
  });
}

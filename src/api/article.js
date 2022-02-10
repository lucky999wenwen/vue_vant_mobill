/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-09-06 15:38:34
 * @LastEditors: wanglong
 * @LastEditTime: 2021-09-07 10:27:43
 * @* : 博虹出品，抄袭必究😄
 */
import request from "@/plugin/axios";

//科室分布
export function getLcjsList(name) {
  return request({
    url: "/wx/channel/children/1/" + name,
    method: "get",
    looding: true,
  });
}

//科室详情
export function getDel(id) {
  return request({
    url: "/wx/article/detail/" + id,
    method: "get",
    looding: true,
  });
}

//科室详情
//医院团队
export function getList(name, data) {
  return request({
    url: "/wx/article/list/1/" + name,
    method: "post",
    looding: true,
    data,
  });
}

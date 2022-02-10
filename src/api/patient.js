/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-07-21 09:51:34
 * @LastEditors: wanglong
 * @LastEditTime: 2021-09-10 09:13:49
 * @* : 博虹出品，抄袭必究😄
 */
import request from "@/plugin/axios";

//就诊人列表
export function list() {
  return request({
    url: "/wx/patient/list",
    method: "get",
    looding: true,
  });
}
//设置默认就诊人
export function setPatient(id) {
  return request({
    url: "/wx/patient/change/" + id,
    method: "get",
  });
}

//查询默认就诊人
export function getPatientDef() {
  return request({
    url: "/wx/patient/default",
    method: "get",
  });
}

//删除就诊人
export function delPatient(id) {
  return request({
    url: "/wx/patient/delete/" + id,
    method: "get",
  });
}

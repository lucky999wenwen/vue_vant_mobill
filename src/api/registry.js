/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-07-22 10:01:08
 * @LastEditors: wanglong
 * @LastEditTime: 2021-12-24 16:45:57
 * @* : 博虹出品，抄袭必究😄
 */
import request from "@/plugin/axios";

//获取有没有号
export function getDeptData(deptId) {
  return request({
    url: "/wx/registry/enable/" + deptId,
    method: "get",
    looding: true,
  });
}

export function getDoctorData(deptId, doctorId) {
  return request({
    url: "/wx/registry/enable-doctor/" + deptId + "/" + doctorId,
    method: "get",
    looding: true,
  });
}

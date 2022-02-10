/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-10-09 14:40:48
 * @LastEditors: wanglong
 * @LastEditTime: 2021-10-12 15:22:02
 * @* : 博虹出品，抄袭必究😄
 */
import request from "@/plugin/axios";

//查询发票列表
export function list(data) {
  return request({
    url: "/wx/invoice/list",
    method: "post",
    looding: true,
    isBack: true,
    data,
  });
}

//发票邮件发送
export function sendMail(data) {
  return request({
    url: "/wx/invoice/mail/send",
    method: "post",
    data,
  });
}

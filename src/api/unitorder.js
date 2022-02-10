/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-08-06 09:51:44
 * @LastEditors: wanglong
 * @LastEditTime: 2021-10-27 15:34:48
 * @* : 博虹出品，抄袭必究😄
 */
import request from "@/plugin/axios";

//获取支付信息
export function getPayMes(data) {
  return request({
    url: "/wx/unitorder/pay",
    method: "post",
    data,
    looding: true,
    isBack: true,
  });
}

//退款
export function refund(data) {
  return request({
    url: "/wx/unitorder/refund",
    method: "post",
    data,
    looding: true,
  });
}

//门诊缴费订单生成
export function mzPay(data) {
  return request({
    url: "wx/unitorder/pay-mz",
    method: "post",
    looding: true,
    data,
  });
}
//核酸检测预约
export function nucleicAcid(data) {
  return request({
    url: "wx/unitorder/nucleic-acid",
    method: "post",
    looding: true,
    data,
  });
}

//核酸检测预约
export function payNucleicAcid(data) {
  return request({
    url: "wx/unitorder/pay-nucleic-acid",
    method: "post",
    looding: true,
    data,
  });
}

/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-07-21 10:17:38
 * @LastEditors: wanglong
 * @LastEditTime: 2021-12-25 10:50:27
 * @* : 博虹出品，抄袭必究😄
 */
import request from "@/plugin/axios";

//添加就诊人
export function addPatient(data) {
  return request({
    url: "/wx/his/addPatient",
    method: "post",
    data,
  });
}

//获取部门列表
export function listDept(data) {
  return request({
    url: "/wx/his/listDept",
    method: "post",
    data,
    looding: true,
  });
}

//预约挂号(未来的时间)
export function createBookingOrder(data) {
  return request({
    url: "/wx/his/bookingOrder",
    method: "post",
    data,
    looding: true,
  });
}

//预约挂号(今日)
export function createTodayOrder(data) {
  return request({
    url: "/wx/his/todayOrder",
    method: "post",
    data,
    looding: true,
  });
}

//挂号记录列表
export function orderRecordList(data) {
  return request({
    url: "/wx/his/orderRecord",
    method: "post",
    data,
    looding: true,
    isBack: true,
  });
}

//挂号记录取消预约
export function bookingCance(data) {
  return request({
    url: "/wx/his/order/bookingCancel",
    method: "post",
    data,
    looding: true,
  });
}

//挂号记录取消当日
export function todayCancel(data) {
  return request({
    url: "/wx/his/order/todayCancel",
    method: "post",
    data,
    looding: true,
  });
}

//获取挂号时间段
export function getTimeNum(data) {
  return request({
    url: "/wx/his/registry/timeNum",
    method: "post",
    data,
    looding: true,
  });
}

//获取门诊缴费记录列表
export function getMzList(data) {
  return request({
    url: "/wx/his/mz/list",
    method: "post",
    looding: true,
    isBack: true,
    data,
  });
}

//获取报告单查询
export function getReportList(data) {
  return request({
    url: "wx/his/inspectReport/list",
    method: "post",
    looding: true,
    isBack: true,
    data,
  });
}

//获取报告单查询
export function getImageReportList(data) {
  return request({
    url: "wx/his/imageReport/list",
    method: "post",
    looding: true,
    isBack: true,
    data,
  });
}

//获取就诊码
export function getQrCode(cardNo) {
  return request({
    url: "wx/his/qrCode/" + cardNo,
    method: "get",
    looding: true,
  });
}

//核酸检测显示数据
export function getHs() {
  return request({
    url: "wx/his/hs",
    method: "get",
    looding: true,
  });
}

//核酸检测获取时间
export function getNow() {
  return request({
    url: "wx/his/now",
    method: "get",
    looding: true,
  });
}
//核酸检测类型
export function getHsType() {
  return request({
    url: "wx/his/hs",
    method: "get",
    looding: true,
  });
}

//获取问卷类型
export function getSurveyType() {
  return request({
    url: "/wx/his/survey/type",
    method: "get",
    looding: true,
  });
}

//获取问卷题目
export function getSurveyPro(data) {
  return request({
    url: "/wx/his/survey/project",
    method: "post",
    data,
    looding: true,
  });
}
//提交问卷答案
export function submitSurvey(data) {
  return request({
    url: "/wx/his/survey/submit",
    method: "post",
    data,
    looding: true,
  });
}

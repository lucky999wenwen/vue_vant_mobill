/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-09-03 15:33:11
 * @LastEditors: wanglong
 * @LastEditTime: 2021-09-03 16:25:13
 * @* : 博虹出品，抄袭必究😄
 */
export function getName(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

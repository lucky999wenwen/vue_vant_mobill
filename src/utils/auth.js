/*
 * @Descripttion:
 * @version:
 * @Author: wanglong
 * @Date: 2021-07-21 09:30:45
 * @LastEditors: wanglong
 * @LastEditTime: 2021-10-27 12:11:12
 * @* : 博虹出品，抄袭必究😄
 */
import Cookies from "js-cookie";

const TokenKey = "Admin-Token";

// export function getToken() {
//   return Cookies.get(TokenKey);
// }

// export function setToken(token) {
//   return Cookies.set(TokenKey, token);
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey);
// }

export function getToken() {
  return sessionStorage.getItem(TokenKey);
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey);
}

/*
 * @Author: seven
 * @Date: 2020-11-10 15:10:05
 * @LastEditTime: 2021-11-04 10:20:36
 * @LastEditors: wanglong
 * @Description:
 * @FilePath: \BH_Middle_ground\OrganizationManger\src\store\index.js
 * @博虹出品，抄袭必究😄
 */
import Vue from "vue";
import Vuex from "vuex";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { login, loginUrl } from "@/api/login";
import { getName } from "@/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    userInfo: {
      nickName: "用户名",
      avatarUrl: require("@/assets/icon/cover/zi-nan.png"),
    },
    isLogin: false,
    currentPatient: {},
    uploadDeftPerson: false,
    addDeftPerson: false,
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_CURRWNT_PATIENT: (state, data) => {
      state.currentPatient = data;
    },
    SET_IS_LOGIN: (state, data) => {
      state.isLogin = data;
    },
    SET_UPLOAD_DEFT_PERSON: (state) => {
      state.uploadDeftPerson = !state.uploadDeftPerson;
    },
    SET_AA_DEFT_PERSON: (state, val) => {
      state.addDeftPerson = val;
    },
  },
  actions: {
    // async init({ state, commit, dispatch }) {
    //   return new Promise((resolve, reject) => {
    //     let code = getName("code") ? getName("code") : null;
    //     let type = getName("t") ? getName("t") : null;
    //     if (
    //       (getToken() == null || getToken() == "null" || getToken() == "" || getToken() == undefined || getToken() == "undefined") &&
    //       code == null
    //     ) {
    //       dispatch("loginUrl");
    //     } else if (code && type) {
    //       if (getToken() == null || getToken() == "null" || getToken() == "" || getToken() == undefined || getToken() == "undefined") {
    //         dispatch("toLogin", code, type);
    //       } else {
    //         let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //         commit("SET_USER_INFO", userInfo);
    //         commit("SET_TOKEN", getToken());
    //         let isLogin = !state.isLogin;
    //         commit("SET_IS_LOGIN", isLogin);
    //         let currentPatient = JSON.parse(localStorage.getItem("currentPatient"));
    //         if (currentPatient) {
    //           commit("SET_CURRWNT_PATIENT", currentPatient);
    //         }
    //       }
    //     } else {
    //       let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //       commit("SET_USER_INFO", userInfo);
    //       commit("SET_TOKEN", getToken());
    //       let isLogin = !state.isLogin;
    //       commit("SET_IS_LOGIN", isLogin);
    //       let currentPatient = JSON.parse(localStorage.getItem("currentPatient"));
    //       if (currentPatient) {
    //         commit("SET_CURRWNT_PATIENT", currentPatient);
    //       }
    //     }
    //     resolve(true);
    //   });
    // },
    // async loginUrl({ state, commit, dispatch }) {
    //   let res = await loginUrl();
    //   removeToken();
    //   localStorage.removeItem("userInfo");
    //   localStorage.removeItem("currentPatient");
    //   window.location.href = res.data;
    // },
    async loginUrl({ state, commit, dispatch }) {
      let res = await loginUrl();
      removeToken();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("currentPatient");
      window.location.href = res.data;
    },
    async loginOut({ state, commit, dispatch }) {
      removeToken();
      localStorage.removeItem("userInfo");
      localStorage.removeItem("currentPatient");
    },
    // async toLogin({ state, commit, dispatch }, code, type) {
    //   login(code, type)
    //     .then((res) => {
    //       setToken(res.data.token);
    //       localStorage.setItem("userInfo", JSON.stringify(res.data));
    //       commit("SET_TOKEN", res.data.token);
    //       commit("SET_USER_INFO", res.data);
    //       commit("SET_IS_LOGIN", true);
    //     })
    //     .catch((err) => {
    //       if (err.code == 302) window.location.href = err.data;
    //       else {
    //         removeToken();
    //         localStorage.removeItem("userInfo");
    //         localStorage.removeItem("currentPatient");
    //         dispatch("init");
    //       }
    //     });
    // },
  },
  modules: {},
});

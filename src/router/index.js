/*
 * @Author: wanglong
 * @Date: 2020-11-06 14:51:27
 * @LastEditTime: 2022-02-10 16:14:08
 * @LastEditors: wanglong
 * @Description:
 * @FilePath: \BH_Middle_ground\OrganizationManger\src\router\index.js
 * @symbol_custom_string_obkoro1: 博虹出品，抄袭必究😄
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require("@/libs/util.import." + process.env.NODE_ENV);

import index from "./modules/index";
import vindex from "./modules/vindex";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/index",
    component: _import("main/home"),
    meta: {
      title: "home",
      keepAlive: true,
    },
    //底部导航栏的路由位置
    children: [
      {
        path: "/index",
        name: "index",
        component: _import("main/index"),
        meta: {
          title: "home",
          keepAlive: true,
          index: 1,
          title: "首页",
        },
      },

      {
        path: "/vindex",
        name: "vindex",
        component: _import("main/vindex/vindex"),
        meta: {
          keepAlive: true,
          index: 2,
          title: "我",
        },
      },
    ],
  },

  {
    path: "*",
    name: "404",
    component: _import("system/404"),
  },
];

const router = new VueRouter({
  // mode: "history",
  base: "/app",
  routes,
});

router.beforeEach(async (to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  // if (to.name == "index" && from.name == "departmentData") {
  //   window.location.replace(window.location.href);
  // }
});

export default router;

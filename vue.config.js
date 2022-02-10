/*
 * @Author: seven
 * @Date: 2020-11-10 15:10:05
 * @LastEditTime: 2021-10-27 14:19:45
 * @LastEditors: wanglong
 * @Description:
 * @FilePath: \BH_Middle_ground\OrganizationManger\vue.config.js
 * @symbol_custom_string_obkoro1: 博虹出品，抄袭必究😄
 */
module.exports = {
  // publicPath: process.env.NODE_ENV === "development" ? "/" : "/" + process.env.VUE_APP_ROUTER_PROFIX + "/",
  publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
  // publicPath: "/web",
  outputDir: process.env.VUE_APP_ROUTER_PROFIX,
  lintOnSave: false,
  // 不输出 map 文件
  productionSourceMap: true,
  devServer: {
    disableHostCheck: true, //  新增该配置项
    port: 9020,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/dev": {
        // target: "http://192.168.11.71:10000",
        target: "http://192.168.11.173:8080/yygh",
        // target:'http://139.9.5.0:9902',
        chainWebpack: true,
        pathRewrite: {
          "^/dev": "",
        },
      },
    },
  },
  configureWebpack: {
    output: {
      library: "child",
      libraryTarget: "umd",
    },
  },
};

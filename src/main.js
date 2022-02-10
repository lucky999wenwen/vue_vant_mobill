/*
 * @Descripttion:
 * @version:
 * @Author: seven
 * @Date: 2020-09-16 15:45:23
 * @LastEditors: wanglong
 * @LastEditTime: 2021-09-24 12:29:50
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import VueCropper from "vue-cropper";
import AMap from "vue-amap";

import "vant/lib/index.css";

// Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(VueCropper);
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: "b3bb3ba17e754e1eec0d49fd45f415ed",
  // 插件集合 （插件按需引入）
  plugin: ["AMap.Geolocation"],
});

let install = null;

function render(props) {
  install = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}
export async function bootstrap({ param, components, utils }) {
  // 注册主应用下发的组件
  Vue.use(components);
  // 把工具函数挂载在vue $mainUtils对象
  Vue.prototype.$mainUtils = utils;
}

export async function mount(props) {
  render(props);
  Vue.prototype.$app = props;
}
export async function unmount(props) {
  install.$destroy();
}

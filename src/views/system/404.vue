<!--
 * @Author: seven
 * @Date: 2020-11-09 16:57:06
 * @LastEditTime: 2021-12-25 11:08:17
 * @LastEditors: wanglong
 * @Description: 
 * @FilePath: \BH_Middle_ground\SystemManager\src\views\system\404.vue
 * @symbol_custom_string_obkoro1: 博虹出品，抄袭必究😄
-->
<template>
  <div>我是404页面</div>
</template>

<script>
export default {
  created() {
    // this.$app.setGlobalState({'404': true});
    this.$route.go(-1);
  },
};
</script>

<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2022-02-22 10:00:06
 * @LastEditors: wanglong
 * @LastEditTime: 2022-02-22 10:03:44
 * @* : 博虹出品，抄袭必究😄
-->
<template>
  <div style="border: 5px solid red">
    我是子1
    <child />
  </div>
</template>

<script>
import child from "./child.vue";
export default {
  components: {
    child,
  },
};
</script>

<style></style>

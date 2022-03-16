<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2022-02-22 10:00:06
 * @LastEditors: wanglong
 * @LastEditTime: 2022-02-22 10:14:54
 * @* : 博虹出品，抄袭必究😄
-->
<template>
  <div style="border: 5px solid red">孙子组件</div>
</template>

<script>
export default {
  inject: {
    // 使用一个默认值使其变成可选项
    parentValue: {
      // 健名
      from: "parentValue", // 来源
      default: "parentValue", // 默认值
    },
    getConfig: {
      // 健名
      from: "getConfig", // 来源
    },
  },
  created() {
    console.log("孙子组件", this.getConfig());
  },
};
</script>

<style></style>

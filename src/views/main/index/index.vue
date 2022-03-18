<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2022-02-10 16:11:00
 * @LastEditors: wanglong
 * @LastEditTime: 2022-03-18 11:00:04
 * @* : 博虹出品，抄袭必究😄
-->
<template>
  <div class="box">
    <header class="header"></header>
    <div class="b1">
      <span></span>
      <div class="title">门诊服务</div>
    </div>
    <div class="serve">
      <div class="left">
        <img src="@/assets/image/yuyueguahao.png" alt="" />
      </div>
      <div class="right">
        <div class="search">
          <img src="@/assets/image/baogaochaxun.png" alt="" />
        </div>
        <div class="history">
          <img src="@/assets/image/guahaojilu.png" alt="" />
        </div>
      </div>
    </div>

    <!-- <button @click="edit">修改一下{{ obj.a.b.value }}</button>
    <Demo /> -->
  </div>
</template>

<script>
import Demo from "./components/demo.vue";
export default {
  components: {
    Demo,
  },
  data() {
    return {
      name: "123",
      body: "567",
      obj: {
        a: {
          b: {
            value: 123456,
          },
        },
      },
    };
  },
  // provide: {
  //   parentValue: "John Doe",
  // },
  //父组件传值的定义个回调函数
  provide() {
    return {
      getConfig: () => ({
        obj: this.obj,
      }),
    };
  },
  computed: {},
  watch: {
    obj: {
      handler(newVal, oldVal) {
        // console.log(newVal, oldVal);
      },
      immediate: true, //想要开始就执行一次
      deep: true, //需要深度监听
    },
  },
  methods: {
    edit() {
      // const obj = { ...this.obj };
      this.obj.a.b.value = this.obj.a.b.value + 1;
      // console.log(obj);
      // this.obj = obj;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/computed.scss";
    .box {
      .header {
        height:pxToRem(297);
        background-image: url("../../../assets/image/header-bj.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .b1 {
        height: pxToRem(109);
        background: #fff;
        text-align: left;
        padding-left: pxToRem(30);
        display: flex;
        align-items: center;
        > span {
          width: pxToRem(6);
          height: pxToRem(32);
          background: linear-gradient(0deg, #f15792 0%, #f07ead 100%);
          border-radius: 3px;
          display: inline-block;
        }
        .title {
          font-size: pxToRem(32);
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #2b2d42;
          margin-left: pxToRem(16);
          line-height: pxToRem(9);
        }
      }
      .serve {
        padding: 0 pxToRem(30);
        display: flex;
        .left {
          flex: 1;
          width: pxToRem(330);
          height: pxToRem(280);
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .right {
          flex: 1;
          margin-left: pxToRem(30);
          .history {
            margin-top: pxToRem(30);
          }
        }
        img {
          display: block;
          width: pxToRem(330);
          height: pxToRem(125);
        }
      }
    }
</style>

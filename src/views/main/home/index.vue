<template>
  <div class="home">
    <div class="view" ref="view" id="Box">
      <transition :name="animate">
        <keep-alive>
          <router-view :scrollObj="scrollObj" />
        </keep-alive>
      </transition>
    </div>
    <keep-alive>
      <ul class="nav">
        <van-tabbar
          active-color="#FF7AA1"
          inactive-color="#8D99AF"
          v-model="active"
          safe-area-inset-bottom
        >
          <van-tabbar-item replace to="/index" class="van-tabbar-item-radius-tl">
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? icon1.active : icon1.normal"
              alt
            />
            <span>首页</span>
          </van-tabbar-item>

          <van-tabbar-item info replace to="/vindex">
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? icon5.active : icon5.normal"
              alt
            />
            <span>我</span>
          </van-tabbar-item>
        </van-tabbar>
        <div class="nav-card">
          <div class="nav-card-box" @click="toYard">
            <img src="@/assets/navicon/code.png" alt="" srcset="" />
            <span>黔康码</span>
            <!-- <span>就诊码</span> -->
          </div>
          <div class="nav-card-box-bg"></div>
        </div>
      </ul>
    </keep-alive>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
export default {
  name: "Home",
  data() {
    return {
      active: 0, //底部导航的下标
      icon1: {
        active: require("@/assets/navicon/home.png"),
        normal: require("@/assets/navicon/home-d.png"),
      },
      icon2: {
        active: require("@/assets/navicon/party.png"),
        normal: require("@/assets/navicon/party-d.png"),
      },
      icon3: {
        active: require("@/assets/navicon/publish.png"),
        normal: require("@/assets/navicon/publish-d.png"),
      },
      icon4: {
        active: require("@/assets/navicon/data.png"),
        normal: require("@/assets/navicon/data-d.png"),
      },
      icon5: {
        active: require("@/assets/navicon/user.png"),
        normal: require("@/assets/navicon/user-d.png"),
      },
      scrollObj: false,
      animate: "",
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index && from.meta.index) {
        if (to.meta.index >= from.meta.index) {
          //设置动画名称
          this.animate = "in";
        } else {
          // console.log("后退")
          this.animate = "out";
        }
      }
    },
    "$store.state.loginTime"() {
      this.active = 0;
    },
  },
  methods: {
    toYard() {
      if (this.$store.state.currentPatient && this.$store.state.currentPatient.cardNo) {
        this.$router.push({ path: "/yard" });
      } else {
        Dialog.alert({
          title: "提示",
          message: "请先选择默认就诊人",
          width: "80vw",
        }).then(() => {});
        return false;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scope>
.home {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.view {
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;
}

.nav {
  display: flex;
  height: 60px;
  position: relative;
  z-index: 999;
  border: 4px solid #fcf9fc;
  li {
    width: 50%;
  }
  .van-tabbar {
    // background-color: #666;
    border: none;
    height: 60px;
    .van-tabbar-item {
      &:first-of-type {
        position: relative;
        right: 35px;
      }
      &:last-of-type {
        position: relative;
        left: 35px;
      }
    }
  }
  .van-hairline--top-bottom::after,
  .van-hairline-unset--top-bottom::after {
    border-width: 0px !important;
  }
  .nav-card {
    position: absolute;
    top: -8vw;
    left: calc(50% - 10vw);
    z-index: 10;
    height: 20vw;
    width: 20vw;
    background-color: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #fcf9fc;
    background: #fff;
    .nav-card-box {
      width: 18vw;
      height: 18vw;
      background: #fe7aa1;
      border-radius: 50%;
      position: relative;
      z-index: 11;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        width: 30%;
        height: 30%;
        margin-bottom: 5%;
      }
      span {
        font-size: 0.8em;
        color: #fff;
      }
    }
    .nav-card-box-bg {
      position: absolute;
      bottom: 0;
      width: calc(100% + 8px);
      height: calc(50% + 10px);
      background: #fff;
      z-index: 9;
    }
  }
}

@mixin fixStyle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  flex: 1;
}
.in-enter-active {
  @include fixStyle;
  z-index: 200;
  transition: transform 0.4s ease;
}
.in-enter {
  transform: translateX(100vw);
}
.in-leave-active {
  @include fixStyle;
  z-index: 100;
  transition: transform 0.4s ease;
}
.in-leave-to {
  transform: translateX(-100vw);
}
.out-enter-active {
  @include fixStyle;
  z-index: 200;
  transition: transform 0.4s ease;
}
.out-enter {
  transform: translateX(-100vw);
}
.out-leave-active {
  @include fixStyle;
  z-index: 200;
  transition: transform 0.4s ease;
}
.out-leave-to {
  transform: translateX(100vw);
}
</style>

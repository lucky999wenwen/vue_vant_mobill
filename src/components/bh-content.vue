<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2021-07-13 14:11:01
 * @LastEditors: wanglong
 * @LastEditTime: 2021-08-12 11:20:43
 * @* : 博虹出品，抄袭必究😄
-->
<template>
  <div id="content">
    <div class="header-back">
      <div class="back-icon">
        <van-icon name="arrow-left" size="1.5em" :color="color" @click="back" />
      </div>
      <div class="header-title">{{ title }}</div>
      <div
        class="current-patient-name"
        v-if="showBtn"
        @click="$router.push({ path: '/peoplemanage' })"
      >
        {{ currentPatient.name }} <van-icon name="arrow-down" />
      </div>
    </div>
    <div class="content-box" :style="{ background: background }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return "标题";
      },
    },
    color: {
      type: String,
      default: () => {
        return "#4A4A4A";
      },
    },
    showBtn: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    background: {
      type: String,
      default: () => {
        return "#fff";
      },
    },
    backUrl: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  computed: {
    ...mapState({
      currentPatient: (state) => state.currentPatient,
    }),
  },
  methods: {
    back() {
      if (this.backUrl) {
        this.$router.replace({ name: this.backUrl });
      } else {
        this.$router.back();
      }
    },
  },
};
</script>

<style scoped lang='scss'>
#content {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header-back {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    .header-title {
      text-align: center;
      font-size: 1.1em;
      font-weight: 400;
      color: #262626;
      line-height: 2.5em;
    }
    .back-icon {
      position: absolute;
      left: 15px;
      top: calc(50% - 0.8em);
    }
    .current-patient-name {
      position: absolute;
      right: 15px;
      top: calc(50% - 0.8em);
      background: #fe99bb;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5em;
      padding: 0.2em 0.3em;
      font-size: 0.8em;
      .van-icon {
        margin-left: 0.3em;
      }
    }
  }
  .content-box {
    flex: 1;
    overflow: hidden;
  }
}
</style>
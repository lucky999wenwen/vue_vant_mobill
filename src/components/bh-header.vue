<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanglong
 * @Date: 2021-07-13 15:23:07
 * @LastEditors: wanglong
 * @LastEditTime: 2022-02-22 09:59:45
 * @* : 博虹出品，抄袭必究😄
-->
<template>
  <div class="bh-header">
    <div class="header-back" :style="{ position: position }" v-if="showBack">
      <div class="back-icon">
        <van-icon name="arrow-left" size="1.5em" :color="color" @click="back" />
      </div>
    </div>
    <div
      class="add-user"
      v-if="showAddUser"
      :style="{
        padding: currentPatient && currentPatient.name ? '3.1em 1.5em' : '2.62em 1.5em',
      }"
    >
      <div class="current-patient-img" v-if="currentPatient && currentPatient.name">
        <!-- cardType   0有身份证    4新生儿 -->
        <img
          v-show="currentPatient.cardType == 0 && currentPatient.sex == '男'"
          src="@/assets/icon/cover/fu-nan.png"
          alt=""
        />
        <img
          v-show="currentPatient.cardType == 0 && currentPatient.sex == '女'"
          src="@/assets/icon/cover/fu-nv.png"
          alt=""
        />
        <img
          v-show="currentPatient.cardType == 4 && currentPatient.sex == '男'"
          src="@/assets/icon/cover/zi-nan.png"
          alt=""
        />
        <img
          v-show="currentPatient.cardType == 4 && currentPatient.sex == '女'"
          src="@/assets/icon/cover/zi-nv.png"
          alt=""
        />
        <div class="current-patient" v-if="currentPatient.name">
          <div class="name">
            {{ currentPatient.name
            }}<span v-if="currentPatient.defaultFlag == 1">默认</span>
          </div>
          <div class="cardno">就诊卡号: {{ currentPatient.cardNo }}</div>
        </div>
      </div>
      <div class="left" v-else>
        <p>为更好享受就诊服务</p>
        <h4>请先选择就诊人</h4>
      </div>
      <div class="right">
        <van-button
          round
          type="info"
          size="small"
          icon="arrow"
          icon-position="right"
          @click="$router.push({ path: '/peoplemanage' })"
          >选择就诊人</van-button
        >
      </div>
    </div>
    <div class="user-info" v-if="showUserInfo">
      <img :src="userInfo.avatarUrl" alt="" />
      <div>
        <div class="user-name">{{ userInfo.nickName }}</div>
      </div>
    </div>
    <div class="tip" v-if="showTip">
      <div class="title">欢迎开通电子就诊卡</div>
      <div class="info">
        请输入就诊人真实身份信息，以避免患者不能正常就诊，最多可 添加5张就诊卡
      </div>
    </div>
    <div class="deptype" v-if="showDepType.show">
      <span v-if="!showDepType.DoctorId" class="deptype_tag">{{ showDepType.tag }} </span>
      <van-image
        v-else
        style="margin-right: 1em"
        round
        width="3.5em"
        height="3.5em"
        :src="
          showDepType.Photo
            ? 'data:image/jpeg;base64,' + showDepType.Photo
            : require('@/assets/icon/index/defaut_header_bad.png')
        "
      />

      <span class="deptype_info">
        <template v-if="showDepType.DoctorId">
          {{ showDepType.DoctorName }}
          <p>
            {{ showDepType.JobName }}
          </p>
        </template>

        <template v-else>
          {{ showDepType.title }}
        </template>
        <!-- {{ showDepType.title }}
        <p v-if="showDepType.JobName && showDepType.DoctorName">
          {{ showDepType.JobName }}-{{ showDepType.DoctorName }}
        </p>
        <p v-else>{{ showDepType.RegistrationClassName }}</p> -->
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    color: {
      type: String,
      default: () => {
        return "#fff";
      },
    },
    showAddUser: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    showUserInfo: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    showBack: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    showTip: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    showDepType: {
      type: Object,
      default: () => {
        return {
          show: false,
          tag: "普",
          title: "普通号",
          Photo: "",
          DoctorId: "",
        };
      },
    },
    background: {
      type: String,
      default: () => {
        return "#fff";
      },
    },
    position: {
      type: String,
      default: () => {
        return "relative";
      },
    },
  },
  computed: {
    ...mapState({
      currentPatient: (state) => state.currentPatient,
      userInfo: (state) => state.userInfo,
    }),
  },
  methods: {
    back() {
      this.$emit("back");
    },
  },
};
</script>

<style lang="scss" scoped>
.bh-header {
  background-image: url("../assets/image/header-bj.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  .header-back {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    .back-icon {
      text-align: left;
      margin-left: 15px;
      i {
        line-height: 2em;
      }
    }
  }
  .add-user {
    position: relative;
    // padding: 2.62em 1.5em;
    // padding: 3.1em 1.5em;
    display: flex;
    align-items: center;
    p {
      text-align: left;
      color: #fff;
      font-size: 0.8em;
      letter-spacing: 2px;
      margin: 0;
      line-height: 1.5em;
    }
    .left {
      width: 100%;
      h4 {
        margin: 1em 0 0 0;
        color: #fff;
        flex: 1;
        text-align: left;
        letter-spacing: 0.3em;
        font-size: 1.2em;
      }
    }
    .current-patient-img {
      width: 100%;
      display: flex;
      .current-patient {
        flex: 1;
        display: inline-block;
        color: #fff;
        text-align: left;
        .name {
          font-size: 1.2em;
          letter-spacing: 0.1em;
          span {
            margin-left: 0.5em;
            background: #ff5380;
            color: #fff;
            font-size: 0.6em;
            padding: 0.1em 0.2em;
            border-radius: 0.3em;
            line-height: 1em;
            position: relative;
            top: -0.1em;
          }
        }
        .cardno {
          font-size: 0.8em;
          line-height: 1.5em;
          position: relative;
          top: 0.5em;
          width: calc(100% - 98px);
          white-space: nowrap; //不换行
          overflow: hidden; //超出隐藏
          text-overflow: ellipsis; //变成...
        }
      }
      img {
        display: inline-block;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        margin-right: 0.5em;
        vertical-align: middle;
      }
    }
    .right {
      position: absolute;
      right: 1em;
      bottom: 2.8em;
      .van-button {
        background: #ff5380;
        border: 1px solid #ff5380;
      }
    }
  }
  .user-info {
    text-align: left;
    padding: 3.1em 2em;
    display: flex;
    color: #fff;
    img {
      display: inline-block;
      width: 3em;
      height: 3em;
      border-radius: 50%;
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1em;
      .user-name {
        font-size: 1.2em;
      }
    }
  }
  .tip {
    text-align: left;
    padding: 0.73em 2em;
    color: #fff;
    position: relative;
    top: -0.7em;
    .title {
      font-size: 1.4em;
      letter-spacing: 0.05em;
    }
    .info {
      font-size: 0.8em;
      letter-spacing: 0.1em;
      line-height: 1.6em;
    }
  }
  .deptype {
    text-align: left;
    padding: 1.22em 2em;
    color: #fff;
    position: relative;
    top: -0.7em;
    display: flex;
    align-items: center;
    > span {
      font-size: 1.2em;
      display: inline-block;
    }
    .deptype_tag {
      font-size: 1.2em;
      display: inline-block;
      color: #ff367c;
      background: #fee3ee;
      border-radius: 50%;
      width: 3em;
      text-align: center;
      line-height: 3em;
      margin-right: 0.8em;
    }
    .deptype_info {
      font-size: 1.2em;
      display: inline-block;
    }
    p {
      margin: 0;
      font-size: 0.8em;
      margin-top: 0.2em;
    }
  }
}
</style>

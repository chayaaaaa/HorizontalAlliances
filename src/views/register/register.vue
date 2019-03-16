<template>
  <div class="container register">
    <!-- ==========    注册页   ========== -->
    <!-- header -->
    <div class="header" flex="main:left cross:center">
      <img src="@/image/bank_icon.png" @click="back()">
      <div>注册</div>
    </div>
    <!-- main -->
    <div class="main register_main">
      <ul>
        <li flex="cross:center">
          <span></span>
          <input type="tel" placeholder="请输入手机号">
        </li>
        <li flex="cross:center">
          <span></span>
          <input type="text" placeholder="请输入推荐码">
        </li>
        <li flex="cross:center">
          <span class="rz"></span>
          <input type="text" placeholder="请输入验证码">
          <span class="count" v-show="show" @click="getCode">获取验证码</span>
          <span v-show="!show" class="count count_click">{{count}} s</span>
        </li>
        <li flex="cross:center">
          <span class="left"></span>
          <input type="password" placeholder="请输入密码" v-if="pwd" v-model="password">
          <input type="text" placeholder="请输入密码" v-else v-model="password">
          <span class="right" @click="showpwd()"></span>
        </li>
        <li flex="cross:center">
          <span class="left"></span>
          <input type="password" placeholder="请确认密码" v-model="surePwd" v-if="sPwd">
          <input type="text" placeholder="请确认密码" v-model="surePwd" v-else>
          <span class="right" @click="surePassword()"></span>
        </li>
      </ul>
    </div>

    <button class="sub_register" flex="main:center cross:center">提交</button>
  </div>
</template>
<script>
import "@/commonCSS/flexcss.less";
export default {
  name: "register",

  data() {
    return {
      count: "", // 获取验证码倒计时
      show: true, // 验证码
      timer: null, // 验证码时间
      pwd: true, // 是否显示密码
      password: "", // 密码
      surePwd: "", // 确认密码
      sPwd: true // 确认密码
    };
  },
  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    // 获取验证码
    getCode() {
      let TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    // 设置密码明文
    showpwd() {
      this.pwd = !this.pwd;
    },
    // 确认密码明文
    surePassword() {
      this.sPwd = !this.sPwd;
    }
  }
};
</script>
<style lang="less" scoped>
.register_main {
  position: relative;
  width: 100%;
  height: 100%;
  ul {
    width: 100%;
    height: auto;
    li {
      width: 90%;
      height: 2.1rem;
      margin: 0 auto;
      border-bottom: 1px solid #d4d4d4;
      span {
        width: 0.7rem;
        height: 0.7rem;
        margin-top: 0.5rem;
      }
      input {
        width: 85%;
        height: 1.5rem;
        margin: 0 auto;
        margin-left: 5%;
        margin-top: 0.5rem;
      }
      input::-webkit-input-placeholder {
        vertical-align: bottom;
        color: #a6a6a6;
      }
      // 获取验证码
      .count {
        width: 3rem;
        height: 1rem;
        line-height: 1rem;
        background: none;
        display: block;
        float: right;
        background: linear-gradient(to right, #f82d25, #d5161a);
        border-radius: 0.2rem;
        color: #fff;
        text-align: center;
        font-size: 0.4rem;
        margin-right: 0.5rem;
      }
      .count_click {
        background: #a6a6a6;
      }
    }
    li:nth-child(1) span {
      background: url("~@/image/register/NO.png") no-repeat;
      background-size: 100% 100%;
    }
    li:nth-child(2) span {
      background: url("~@/image/register/zan.png") no-repeat;
      background-size: 100% 100%;
    }
    li:nth-child(3) .rz {
      background: url("~@/image/register/rz.png") no-repeat;
      background-size: 100% 100%;
    }
    li:nth-child(4) .left,
    li:nth-child(5) .left {
      background: url("~@/image/register/pd.png") no-repeat;
      background-size: 100% 100%;
    }
    li:nth-child(4) .right,
    li:nth-child(5) .right {
      background: url("~@/image/register/eye.png") no-repeat;
      background-size: 100% 100%;
      display: block;
      float: right;
      margin-right: 0.5rem;
    }
  }
}
// 提交
.sub_register {
  width: 70%;
  margin: 2rem auto;
  height: 1.5rem;
  border-radius: 0.2rem;
  background: linear-gradient(to right, #f82d25, #d5161a);
  color: #fff;
  letter-spacing: 0.2rem;
}
</style>

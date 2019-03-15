<template>
  <div class="container login">
    <!-- ==========    登录页   ========== -->
    <div class="main">
      <div class="logo">
        <img src="@/image/login/logo.png">
      </div>
      <div class="md-example-child md-example-child-input-item-1">
        <md-field>
          <md-input-item ref="name" title="用户名" placeholder="用户名" is-title-latent clearable></md-input-item>
          <md-input-item
            ref="id"
            title="登录密码"
            placeholder="登录密码"
            is-title-latent
            clearable
            type="password"
          ></md-input-item>
        </md-field>
      </div>
      <button @click="login()" class="login_button">登录</button>
      <div class="bottom">
        <span @click="forgetPassword()">忘记密码？</span>
        <span @click="register()">注册账号</span>
      </div>
    </div>
  </div>
</template>

<script>
import "@/commonCSS/flexcss.less";
import { InputItem, Field } from "mand-mobile";

export default {
  name: "login",
  components: {
    [InputItem.name]: InputItem,
    [Field.name]: Field
  },
  data() {
    return {

    };
  },
  methods: {
    // 登录
    login() {
      this.$router.push("/guideView");
    },
    // 注册
    register() {
      this.$router.push("/register");
    },
    // 忘记密码
    forgetPassword() {
      this.$router.push("/setPassWord");
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  top: 0;
  bottom: 0;
  font-size: 0.5rem !important;
  .logo {
    width: 100%;
    position: absolute;
    top: 3rem;
    text-align: center;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
  // 输入框
  .md-example-child-input-item-1 {
    width: 80%;
    position: absolute;
    top: 10rem;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
  .login_button {
    width: 80%;
    height: 1.5rem;
    background: linear-gradient(to right, #f82d25, #d5161a);
    position: absolute;
    bottom: 6.5rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    border-radius: 0.2rem;
    color: #fff;
    letter-spacing: 0.15rem;
    font-size: 0.5rem;
  }
  .bottom {
    color: #c5c5c5;
    width: 80%;
    height: 1.5rem;
    position: absolute;
    bottom: 4.5rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    font-size: 0.45rem;
    span:nth-child(1) {
      display: inline;
      float: left;
    }
    span:nth-child(2) {
      display: inline;
      float: right;
    }
  }
}
</style>
<style lang="less">
.md-input-item .md-input-item-control .md-input-item-input,
.md-input-item .md-input-item-control .md-input-item-fake {
  height: 2rem !important;
}
.md-field .md-field-content .md-field-item .md-field-item-inner::before,
.md-field .md-field-content .md-input-item-container::before {
  bottom: 0.2rem !important;
}
.md-input-item .md-input-item-control .md-input-item-input,
.md-input-item .md-input-item-control .md-input-item-fake {
  font-size: 0.5rem !important;
  color: #757575 !important;
}
</style>


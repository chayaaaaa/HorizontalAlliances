<template>
  <div class="container setPassWord">
    <!-- ==========   设置密码   ========== -->
    <!-- header -->
    <div class="header" flex="main:left cross:center">
      <img src="@/image/bank_icon.png" @click="back()">
      <div>忘记密码</div>
    </div>
    <!-- main -->
    <div class="main setPassWord_main">
      <ul>
        <li flex="cross:center">
          <span class="left">手机号</span>
          <input type="tel" placeholder="请输入手机号" v-model="phone">
        </li>
        <li flex="cross:center">
          <span class="left">验证码</span>
          <input type="text" placeholder="请输入验证码" v-model="code">
          <span class="count" v-show="show" @click="getCode">获取验证码</span>
          <span v-show="!show" class="count count_click">{{count}} s</span>
        </li>
        <p>设置新登录密码</p>
        <li flex="cross:center">
          <span class="left">原密码</span>
          <input type="password" placeholder="请输入原密码" v-model="passWord">
        </li>
        <li flex="cross:center">
          <span class="left">新密码</span>
          <input type="password" placeholder="6-16位，数字和字母组成" v-model="newPassWord">
        </li>
        <li flex="cross:center">
          <span class="left">确认密码</span>
          <input type="password" placeholder="请确认密码" v-model="surePassWord">
        </li>
      </ul>
    </div>
    <button class="sub_setPassWord btn" flex="main:center cross:center" v-if="isSubmit == false">确定</button>
    <button class="sub_setPassWord" flex="main:center cross:center" @click="submit()" v-else>确定</button>
  </div>
</template>
<script>
import "@/commonCSS/flexcss.less";
export default {
  name: "setPassWord",
  data() {
    return {
      count: "", // 获取验证码倒计时
      show: true, // 验证码
      timer: null, // 验证码时间
      phone: "", // 手机号
      code: "", // 验证码
      passWord: "", // 原密码
      newPassWord: "", // 新密码
      surePassWord: "" // 确认密码
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
    // 提交
    submit() {}
  },
  // 计算
  computed: {
    isSubmit() {
      return (
        !!this.phone && !!this.code && !!this.newPassWord && !!this.surePassWord
      );
    }
  }
};
</script>
<style lang="less" scoped>
.setPassWord_main {
  position: relative;
  width: 100%;
  height: 100%;

  ul {
    width: 100%;
    height: auto;
    p {
      width: 95%;
      height: 1.5rem;
      margin-left: 5%;
      line-height: 1.5rem;
      font-size: 0.4rem;
      font-weight: 800;
      color: #d4171a;
    }
    li {
      width: 90%;
      height: 2.1rem;
      margin: 0 auto;
      border-bottom: 1px solid #d4d4d4;
      .left {
        width: 2.5rem;
        height: 0.7rem;
        margin-top: 0.5rem;
      }
      input {
        width: 85%;
        height: 1.5rem;
        margin: 0 auto;
        /*  margin-left: 5%; */
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
        position: absolute;
        right: 0.3rem;
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
  }
}

// 提交
.sub_setPassWord {
  width: 80%;
  margin: 2rem auto;
  height: 1.5rem;
  border-radius: 0.2rem;
  background: linear-gradient(to right, #f82d25, #d5161a);
  color: #fff;
  letter-spacing: 0.2rem;
}
.btn {
  background: #d8d8d8;
}
</style>

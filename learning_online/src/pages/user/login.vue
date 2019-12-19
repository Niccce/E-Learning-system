<template>
  <div class="container">
    <x-header :left-options="{ showBack: false }">登录</x-header>
    <group>
      <x-input
        title=""
        name="email"
        placeholder="请输入邮箱"
        v-model="email"
        required
        is-type="email"
        @on-blur="isEmail"
      ></x-input>
      <x-input
        title=""
        type="text"
        placeholder="请输入密码"
        v-model="password"
        :min="6"
        :max="16"
        @on-change="change"
        required
      ></x-input>
    </group>
    <box gap="10px 25px">
      <x-button type="primary" @click.native="handleLogin">登录</x-button>
    </box>
    <p>
      <router-link class="to-regist" to="/regist"
        >还没有账号？快去注册</router-link
      >
    </p>
  </div>
</template>

<script>
import { XInput, Box, Group, XButton, XHeader } from "vux";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "", // 用户密码
      isemail: false
    };
  },
  components: {
    XInput,
    XButton,
    Group,
    Box,
    XHeader
  },
  methods: {
    isEmail() {
      // 定义正则表达式的变量:邮箱正则
      var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      // 文本框不为空，并且验证邮箱正则成功，给出正确提示
      if (this.email !== null && this.email.search(reg) !== -1) {
        this.isemail = true;
      }
    },
    change(val) {
      console.log("on change", val);
    },
    created() {
      window.document.title = "登录";
    },
    handleLogin() {
      if (!this.email || !this.password) {
        this.$vux.toast.text("您有未填项，不能注册");
      } else if (!this.isemail) {
        this.$vux.toast.text("邮箱格式错误");
      } else {
        this.$axios
          .post("/api/member/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            // console.log("登录");
            console.log(response.data);
            if (response.data == -1) {
              this.$vux.toast.text("该用户不存在");
            } else if (response.data == 0) {
              this.$vux.toast.text("密码错误");
            } else if (response.data == 1) {
              console.log("成功");
              this.$vux.toast.text("登录成功");
              // 跳转首页
              this.$router.push({
                path: "/"
              });
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0;
  background-color: white;
}
.to-regist {
  width: 100%;
  text-align: center;
  color: black;
  font-size: 1em;
  position: absolute;
  bottom: 1.5em;
}
</style>

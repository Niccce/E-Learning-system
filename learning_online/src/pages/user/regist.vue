<template>
  <div class="container">
    <x-header :left-options="{ showBack: false }">注册</x-header>
    <group>
      <x-input
        title=""
        name="email"
        placeholder="请输入注册邮箱"
        v-model="email"
        required
        is-type="email"
        @on-blur='isEmail'
      >
      </x-input>
      <x-input
        title=""
        name="username"
        placeholder="请设置用户名"
        v-model="username"
        :min="1"
        required
      >
      </x-input>
      <x-input
        title=""
        type="password"
        placeholder="请设置登录密码"
        v-model="password"
        :min="6"
        :max="16"
        required
      ></x-input>
      <x-input
        title=""
        type="password"
        placeholder="确认密码"
        v-model="passwordC"
        :min="6"
        :max="16"
        required
      ></x-input>
    </group>
    <box gap="10px 25px">
      <x-button type="primary" @click.native="handleRegist">注册</x-button>
    </box>
    <p>
      <router-link class="to-login" to="/login">已有账号？去登录</router-link>
    </p>
  </div>
</template>

<script>
import { XInput, Box, Group, XButton, XHeader } from 'vux'

export default {
  name: 'regist',
  components: {
    XInput,
    XButton,
    Group,
    Box,
    XHeader
  },
  data () {
    return {
      email: '', // 邮箱
      username: '', // 用户名
      password: '', // 密码
      passwordC: '', // 确认密码
      isemail: false
    }
  },
  methods: {
    isEmail () {
      // 定义正则表达式的变量:邮箱正则
      var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      // 文本框不为空，并且验证邮箱正则成功，给出正确提示
      if (this.email !== null && this.email.search(reg) !== -1) {
        this.isemail = true
      } else {
        // this.$vux.toast.text('邮箱格式错误', 'middel')
        // this.$vux.toast.show({
        //   text: 'Loading'
        // })
      }
    },
    handleRegist () {
      if (!this.email || !this.username || !this.password || !this.passwordC) {
        this.$vux.toast.text('您有未填项，不能注册')
      } else if (this.password !== this.passwordC) {
        this.$vux.toast.text('两次输入的密码不一致')
      } else if (!this.isemail) {
        this.$vux.toast.text('邮箱格式错误')
      } else {
        this.$vux.toast.text('注册成功')
      }
    }
  },
  created () {
    window.document.title = '注册'
  }
}
</script>

<style scoped>
.container{
  background-color: white;
}
.to-login{
  width: 100%;
  text-align: center;
  color: black;
  font-size: 1em;
  position: absolute;
  bottom: 1.5em;
}
</style>

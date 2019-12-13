<template>
  <div class="container">
    <x-header>课程信息</x-header>
    <img src="//7n.w3cschool.cn/attachments/knowledge/201912/4805.png" />
    <tab v-model="index" @on-index-change='indexChange'>
      <tab-item>介绍</tab-item>
      <tab-item>目录</tab-item>
      <tab-item>评论</tab-item>
    </tab>
    <div id="intro" v-if="index === 0">
      <span>ES6微课</span>
      <span>ES6微课介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</span>
    </div>
    <div id="catalogue" v-if="index === 1">2</div>
    <div id="comment" v-if="index === 2">
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
    </div>
    <x-button class="btn" mini type="warn">加入课程</x-button>
  </div>
</template>

<script>
import { Tab, TabItem, XHeader, XButton } from 'vux'
import comment from './components/comment'
export default {
  components: {
    Tab,
    TabItem,
    XHeader,
    comment,
    XButton
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    indexChange (index) {
      this.index = index
    }
  }
}
</script>

<style scoped>
.container{
  background-color: white
}
.container img {
  width: 100%;
}
#intro{
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  line-height: 1.5em;
}
.btn{
  position: fixed;
  right: 1em;
  bottom: 1em;
}
</style>

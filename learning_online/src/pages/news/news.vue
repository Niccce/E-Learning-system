<template>
  <div class="container">
    <x-header>新闻详情</x-header>
    <div class="title">
        <p>新闻名称</p>
    </div>
    <div class="info">
        <span>记者:Niccce</span>
        <span>2019-12-17</span>
    </div>
    <div class="content">
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  }
}
</script>

<style scoped>
.container {
  background-color: white;
}
.container /deep/ .vux-header {
  background-color: #2f2f33
}
.title{
    font-size: 1.8em;
    margin: 0.2em;
}
.info{
    display: flex;
    flex-direction: column;
    margin: 0.2em;
}
.content{
    font-size: 1.2em;
    line-height: 1.2em;
    padding: 0.2em;
}
</style>

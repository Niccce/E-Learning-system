<template>
  <div class="container">
    <x-header :left-options="{ showBack: false }">消息</x-header>
    <msg-list></msg-list>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import msgList from './components/msgList'

export default {
  components: {
    XHeader,
    msgList
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
</style>

<template>
<keep-alive>
  <div class="container">
    <x-header :left-options="{ showBack: false }">消息</x-header>
    <msg-list></msg-list>
  </div>
  </keep-alive>
</template>

<script>
import { XHeader } from 'vux'
import msgList from './components/msgList'

export default {
  components: {
    XHeader,
    msgList
  }
  // activated () {
  //   this.$store.state.showNav = true
  //   console.log('reset')
  // }
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

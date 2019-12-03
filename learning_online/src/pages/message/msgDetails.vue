<template>
  <div class="container">
    <x-header>Python课程</x-header>
    <msg-Detail></msg-Detail>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import msgDetail from './components/msgDetail'

export default {
  components: {
    XHeader,
    msgDetail
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

<template>
  <div class="container">
    <x-header>普通会员</x-header>
    <course></course>
    <course></course>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import course from './components/course'
export default {
  components: {
    course,
    XHeader
  },
  created () {
    this.getParams()
  },
  methods: {
    getParams () {
      // 取到路由带过来的参数
      var routerParams = this.$route
      // 将数据放在当前组件的数据内
      // this.memberLevel = routerParams
      console.log(routerParams)
    }
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>

<style scoped>
.container {
  margin-top: 0.6em;
  background-color: #ffffff;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 2.5em;
  line-height: 2.5em;
  font-size: 1.15em;
  padding: 0 0.8em;
}
.more {
  color: #7c7c7c;
  font-size: 0.8em;
}
.arrow {
  height: 0.6em;
}
</style>

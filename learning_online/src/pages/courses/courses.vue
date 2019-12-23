<template>
  <div class="container">
    <x-header>{{memberLevel}}</x-header>
    <course v-for="item of coursesList" :key="item.cla_id" :data='item'></course>
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
  data() {
    return {
      memberLevel:'',
      coursesList:[]
    }
  },
  created () {
    this.getParams()
  },
  methods: {
    getParams () {
      var _this = this;
      _this.$vux.loading.show({
        text: "加载中.."
      });
      // 取到路由带过来的参数
      var routerParams = _this.$route
      // 将数据放在当前组件的数据内
      _this.memberLevel=routerParams.query.memberLevel
      console.log(routerParams.query.grade)
      //  会员等级课程列表
      _this.$axios
        .post("/api/class/vipClass", {
          cla_grade: routerParams.query.grade
        })
        .then(response => {
          this.coursesList = response.data;
          // console.log(this.coursesList)
          this.$vux.loading.hide()
        });
    }
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>

<style scoped>
.container {
  /* margin-top: 0.6em; */
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

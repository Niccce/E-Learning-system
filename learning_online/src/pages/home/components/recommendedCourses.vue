<template>
  <div class="container">
    <div class="header">
      <div>推荐课程</div>
      <router-link to="/account">
        <div>
          <span class="more">更多</span>
          <img class="arrow" slot="icon" src="../../../assets/rightArrow.png" />
        </div>
      </router-link>
    </div>
    <course v-for="item of coursesList" :key="item.cla_id" :data='item'></course>
  </div>
</template>

<script>
import course from "../components/course";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    course,
    mapState,
    mapActions,
  },
  data() {
    return {
      coursesList: this.$store.state.recommendedCourses
    };
  },
  methods: {
    ...mapActions([
      "getRecommendedCourses" // 触发actions里的 getInfo 函数，调动接口
    ]),
    onClick() {
      this.$router.push({ path: "/courses/courseDetails" });
    }
  },
  created() {
    // this.getClass()
    // this.$store.dispatch('getRecommendedCourses')
    this.getRecommendedCourses();
  },
  watch: {
    "$store.state.recommendedCourses"() {
      // console.log(1111);
      this.coursesList = this.$store.state.recommendedCourses;
    }
  }
  // methods: {
  //   // 获取首页推荐课程
  //   getClass () {
  //     var _this = this
  //     _this.$axios.get('/api/class/getClass', {}).then(response => {
  //       // this.coursesList.push(response.data)
  //       this.coursesList = response.data
  //       console.log('reC.vue获取推荐课程')
  //       console.log(this.coursesList)
  //     })
  //     // this.$http.post('/api/class/getClass').then(response => {
  //     //   console.log(response)
  //     // })
  //   },
  //   onClick () {
  //     this.$router.push({path: '/courses/courseDetails'})
  //   }
  // },
  // created () {
  //   this.getClass()
  // }
};
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

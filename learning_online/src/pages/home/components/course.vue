<template>
  <div class="container" @click="onClick">
    <img class="courseImg" src="" />
    <div class="classText">
      <span class="courseTitle">
        {{ data.cla_name }}
      </span>
      <div class="courseInfo">
        {{ data.cla_content }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    mapState,
    mapActions
  },
  props: ['data'],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      "getRecommendedCourses" // 触发actions里的 getInfo 函数，调动接口
    ]),
    // 获取首页推荐课程
    // getClass () {
    //   var _this = this
    //   _this.$axios.get('/api/class/getClass', {}).then(response => {
    //     // this.coursesList.push(response.data)
    //     this.coursesList = response.data
    //     console.log('reC.vue获取推荐课程')
    //     console.log(this.coursesList)
    //   })
    //   // this.$http.post('/api/class/getClass').then(response => {
    //   //   console.log(response)
    //   // })
    // },
    onClick() {
      this.$router.push({ path: "/courses/courseDetails" });
    }
  },
  created() {
    // this.getClass()
    // this.$store.dispatch('getRecommendedCourses')
    this.getRecommendedCourses();
  },
  computed: {},
  watch: {
    "$store.state.recommendedCourses"() {
      // console.log(1111);
      this.coursesList = this.$store.state.recommendedCourses;
    }
  }
  // computed: {
  //   ...mapState([
  //     "recommendedCourses" // 获取store里的数据，放在computed中可以实时更新
  //   ])
  // }
};
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
  margin-top: 0;
  padding: 0.5em 0.8em;
}
.container::after {
  content: "";
  position: absolute;
  display: block;
  height: 1px;
  width: 90%;
  bottom: 0;
  background-color: #d3d3d3;
}
.courseImg {
  display: block;
  height: 5em;
  width: 7em;
  background-color: aquamarine;
  border-radius: 0.68em;
  overflow: hidden;
}
.classText {
  margin-left: 0.7em;
  padding: 1em 0;
}
.courseTitle {
  display: block;
  margin-top: 0.5em;
  font-size: 1.2em;
  width: 10em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: -0.2em;
}
.courseInfo {
  display: block;
  margin-top: 0.5em;
  font-size: 0.8em;
  width: 20em;
  bottom: 1em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 1.4em;
}
</style>

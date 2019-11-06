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
    <course></course>
  </div>
</template>

<script>
import course from '../components/course'
export default {
  components: {
    course
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

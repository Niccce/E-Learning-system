<template>
  <router-link to="/message/msgDetails">
    <div class="container">
      <div class="left">
        <img class="courseImg" src="../../../assets/class-fill.png" />
        <span>课程名称名称</span>
      </div>
      <div class="more">
        <badge text="1"></badge>
        <img class="arrow" src="../../../assets/rightArrow.png" />
      </div>
    </div>
  </router-link>
</template>

<script>
import { Badge } from 'vux'

export default {
  components: {
    Badge
  }
}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 4em;
  line-height: 4em;
  /* font-size: 1.15em; */
  padding: 0 0.8em;
  margin-top: 0.5em;
  color: black;
}
.container::after {
  content: '';
  position: absolute;
  display: block;
  height: 1px;
  width: 95%;
  bottom: -0.2em;
  background-color: #d3d3d3;
}
.courseImg {
  height: 2em;
  width: 2em;
  background-color: #1296db;
  border-radius: 0.3em;
  padding: 0.5em;
}
.arrow {
  height: 0.6em;
}
</style>

<template>
  <router-link to="/courses/courseDetails">
    <div class="container">
      <!-- <div class="subscript">
        已完成
      </div> -->
      <!-- <finished-icon></finished-icon> -->
      <achi-icon></achi-icon>
      <img class="courseImg" src="" />
      <div class="classText">
        <div class="courseTitle">
          前端课程前端课程前端课程前端课程前端课程前端课程前端课程
        </div>
        <div class="courseInfo">
          课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import finishedIcon from './finishedIcon'
import achiIcon from './achiIcon'
export default {
  components: {
    finishedIcon,
    achiIcon
  }
}
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
  margin-bottom: 0.6em;
  padding: 0.5em 0.8em;
  background-color: white;
  display: flex;
  align-items: center;

  overflow: hidden;
  /* position: relative; */
  color: black;
}
.courseImg {
  display: block;
  height: 4.5em;
  width: 7em;
  background-color: aquamarine;
  border-radius: 0.4em;
  overflow: hidden;
  margin: 0.2em 0;
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
.subscript {
  color: #fff;
  height: 1.8em;
  width: 8em;
  position: absolute;
  /* right: 1em; */
  right: -2em;
  top: 1em;
  text-align: center;
  line-height: 1.8em;
  font-family: "黑体";
  background-color: #0c60ee;
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

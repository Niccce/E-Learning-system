<template>
  <div class="container">
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
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
  margin-bottom: 0.6em;
  padding: 0.5em 0.8em;
  background-color: white;
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

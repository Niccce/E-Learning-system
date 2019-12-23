<template>
  <router-link to="/courses/courseDetails">
    <div class="container">
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
  </router-link>
</template>

<script>
export default {
   props: ['data']
}
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
  margin-top: 0;
  padding: 0.5em 0.8em;
  color: black;
}
.container::after {
  content: '';
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

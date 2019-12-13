<template>
  <div class="container">
    <x-header>已完成课程</x-header>
    <div class="finished-head">
      <div class="nums">
        <div class="num">
          <span>已完成课程</span>
          <span>3门</span>
        </div>
        <div class="line"></div>
        <div class="num">
          <span>已考试课程</span>
          <span>2门</span>
        </div>
      </div>
    </div>
    <div class="courses">
      <course></course>
      <course></course>
      <course></course>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import course from './components/course'
export default {
  components: {
    XHeader,
    course
  }
}
</script>

<style scoped>
.container /deep/ .vux-header {
  background-color: #2f2f33
}
.finished-head{
  height: 11em;
  background: url(../../assets/header-bg.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nums{
  background-color: #fff;
  height: 7em;
  width: 15em;
  box-shadow: .3em .3em .3em 0 rgba(0, 0, 0, 0.267);
  border-radius: .2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.num span{
  display: inline-block;
  margin-top: .8em;
}
.num {
  text-align: center;

}
.line{
  margin: 0 1em;
  height: 2em;
  border-left: solid 2px #ccc;
}
</style>

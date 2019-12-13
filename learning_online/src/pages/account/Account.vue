<template>
  <div class="container">
    <x-header :left-options="{ showBack: false }">我的学习</x-header>
    <div class="memberInfo">
      <img class="info-img" src="http://q1tum4ulx.bkt.clouddn.com/u=2280731892,2555333731&fm=26&gp=0.jpg" />
      <div class="info">
        <span style="font-size:1.5em;">Niccce</span>
        <span>学号：C0001</span>
        <span>积分：123</span>
        <span>Lv1：122</span>
      </div>
    </div>
    <div>
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <!-- <grid-item link="/message">
          <img slot="icon" src="../../assets/member.png" />
          <span slot="label">已购课程</span>
        </grid-item> -->
        <grid-item link="/account/myCourse">
          <img slot="icon" src="../../assets/course.png" />
          <span slot="label">我的课程</span>
        </grid-item>
        <grid-item link="/account/achievement" @on-item-click="onItemClick">
          <img slot="icon" src="../../assets/grade.png" />
          <span slot="label">我的成绩</span>
        </grid-item>
        <grid-item link="/account/certificates" @on-item-click="onItemClick">
          <img slot="icon" src="../../assets/certificate.png" />
          <span slot="label">我的证书</span>
        </grid-item>
      </grid>
    </div>
  </div>
</template>

<script>
import { XHeader, Grid, GridItem } from 'vux'
export default {
  components: {
    XHeader,
    Grid,
    GridItem
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.container /deep/ .vux-header {
  background-color: #2f2f33;
}
.weui-grids{
  background-color: white
}
.memberInfo{
  width: 100%;
  height: 9em;
  display: flex;
  align-items: center;
}
.info-img{
  height: 7em;
  width: 7em;
  border-radius: 50%;
  border: 1px black solid;
  margin-left: 1em;
}
.info{
  display: flex;
  flex-direction: column;
  line-height: 1.5em;
  margin-left: 1em;
}
</style>

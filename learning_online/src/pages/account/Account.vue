<template>
  <div class="container">
    <x-header :left-options="{ showBack: false }">我的学习</x-header>
    <div class="container">
      <grid :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item link="/message">
          <img slot="icon" src="../../assets/member.png" />
          <span slot="label">已购课程</span>
        </grid-item>
        <grid-item link="/account/finished">
          <img slot="icon" src="../../assets/seniorMember.png" />
          <span slot="label">完成课程</span>
        </grid-item>
        <grid-item link="/account/achievement" @on-item-click="onItemClick">
          <img slot="icon" src="../../assets/superMember.png" />
          <span slot="label">我的成绩</span>
        </grid-item>
        <grid-item link="/account/certificates" @on-item-click="onItemClick">
          <img slot="icon" src="../../assets/superMember.png" />
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
</style>

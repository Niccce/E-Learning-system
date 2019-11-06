<template>
  <!-- <flexbox style="">
    <flexbox-item class="container">
      <div class="member setPosition">
        <img class="img-size" src="../../../assets/member.png" />
      </div>
      <span >普通会员</span>
    </flexbox-item>
    <flexbox-item class="container">
      <div class="senior-member setPosition">
        <img class="img-size" src="../../../assets/seniorMember.png" />
      </div>
    </flexbox-item>
    <flexbox-item class="container">
      <div class="super-member setPosition">
        <img class="img-size" src="../../../assets/superMember.png" />
      </div>
    </flexbox-item>
  </flexbox> -->
  <div class="container">
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/message">
        <img slot="icon" src="../../../assets/member.png" />
        <span slot="label">普通会员</span>
      </grid-item>
      <grid-item link="/component/cell">
        <img slot="icon" src="../../../assets/seniorMember.png" />
        <span slot="label">高级会员</span>
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../../../assets/superMember.png" />
        <span slot="label">特级会员</span>
      </grid-item>
    </grid>
  </div>
</template>

<script>
// import { Flexbox, FlexboxItem } from 'vux'

// export default {
//   components: {
//     Flexbox,
//     FlexboxItem
//   }
// }
import { Grid, GridItem } from 'vux'

export default {
  components: {
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
.container {
  margin-top: 0.6em;
  background-color: #ffffff;
}
/* .container {
  display: flex;
  justify-content: center;
}
.setPosition {
  height: 4em;
  width: 4em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-size {
  margin: 0 auto;
  height: 3em;
}
.member {
  background-color: #ccc;
}
.senior-member {
  background-color: #ccc;
}
.super-member {
  background-color: #ccc;
} */
/* .grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
} */
</style>

<template>
  <div>
    <group class="parent">
      <cell class="cellstyle">
        <img class="imgstyle" src="../../../assets/News-red.png" />
        <marquee>
          <marquee-item v-for="i in newsList" :key="i" class="align-middle" @click.native="onClick(i)">hello{{i}}</marquee-item>
        </marquee>
      </cell>
    </group>
  </div>
</template>

<script>
import { Marquee, MarqueeItem, Cell, Group } from 'vux'

export default {
  components: {
    Marquee,
    MarqueeItem,
    Cell,
    Group
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick (i) {
      console.log(i)
    }
  },
  data () {
    return {
      newsList: [1, 2, 3]
    }
  }
}
</script>

<style scoped>
.cellstyle{
    display: block;
}
.align-middle {
    /* position: relative;
    right: 7.2em; */
  text-align: center;
}
.imgstyle{
    display: inline-block;
    position: absolute;
    left: 0.5em;
    height: 1.3em;
}
.parent /deep/ .weui-cells{
    margin-top: 0
}
</style>

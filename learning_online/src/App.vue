<template>
  <div id="app">
    <!-- <router-view /> -->
    <router-view :style="routerViewClass"></router-view>
    <tabbar @on-index-change="onIndexChange" v-if="$route.meta.isNavShow">
      <tabbar-item selected link="/">
        <img slot="icon" src="~@/assets/Home.png" />
        <img slot="icon-active" src="~@/assets/Home-selected.png" />
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/message">
        <img slot="icon" src="~@/assets/msg.png" />
        <img slot="icon-active" src="~@/assets/msg-selected.png" />
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/account">
        <img slot="icon" src="~@/assets/user.png" />
        <img slot="icon-active" src="~@/assets/user-selected.png" />
        <span slot="label">账号</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
// import { mapGetters, mapActions } from 'vuex'
// import { mapGetters } from 'vuex'

// let navShow = true

export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  },
  // data () {
  //   return {
  //     navShow
  //   }
  // },
  data () {
    return {
      index: 0,
      routerViewClass: {
        height: '',
        overflow: 'scroll'
      }
    }
  },
  methods: {
    onIndexChange (newIndex, oldIndex) {
      console.log(newIndex, oldIndex)
    },
    setHeight () {
      this.routerViewClass.height = window.innerHeight - 53 + 'px'
      console.log(this.routerViewClass)
    }
  },
  mounted () {
    // 在DOM加载后，执行，获得window的高度，并减去header和tabbar的高度，
    // 96是自己在开发者模式看到的，header的height为 40，上下padding为 3，
    // tabbar的height为 50
    this.setHeight()
  }
  // computed: mapGetters([
  //   // 从 getters 中获取值
  //   'tabbarShow'
  // ]),
  // watch: {
  //   $route (to, from) {
  //     if (
  //       to.path === '/' ||
  //       to.path === '/message' ||
  //       to.path === '/audioBook' ||
  //       to.path === '/mine'
  //     ) {
  //       /**
  //        * $store来自Store对象
  //        * dispatch 向 actions 发起请求
  //        */
  //       navShow = to.meta.isNavShow
  //       // this.$store.dispatch('showTabBar')
  //     } else {
  //       // this.$store.dispatch('hideTabBar')
  //     }
  //   }
  // }
}
</script>

<style>
#app{
  background-color: #e6ebf2;
}
</style>

<template>
  <div id="app">
    <router-view />
    <tabbar @on-index-change="onIndexChange" v-if="$route.meta.isNavShow">
      <tabbar-item selected link="/">
        <img slot="icon" src="~@/assets/Home.svg" />
        <img slot="icon-active" src="~@/assets/Home-selected.svg" />
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/message">
        <img slot="icon" src="~@/assets/msg.svg" />
        <img slot="icon-active" src="~@/assets/msg-selected.svg" />
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/learning">
        <img slot="icon" src="~@/assets/course.svg" />
        <img slot="icon-active" src="~@/assets/course-selected.svg" />
        <span slot="label">我的学习</span>
      </tabbar-item>
      <tabbar-item link="/account">
        <img slot="icon" src="~@/assets/user.svg" />
        <img slot="icon-active" src="~@/assets/user-selected.svg" />
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
  methods: {
    onIndexChange (newIndex, oldIndex) {
      console.log(newIndex, oldIndex)
    }
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

<style></style>

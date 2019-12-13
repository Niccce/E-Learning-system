<template>
  <div id="app">
    <!-- <router-view /> -->
    <router-view :style="routerViewClass"></router-view>
    <tabbar @on-index-change="onIndexChange" v-if="$route.meta.showNav" v-model="index">
      <!-- <tabbar-item selected link="/"> -->
      <tabbar-item link="/">
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

export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  },
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
      // this.$store.state.navIndex = newIndex
      this.index = newIndex
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
  },
  created () {
    // 导航栏状态问题
    // console.log(this.$route.path.replace('/', ''))
    if (this.$route.path.replace('/', '') === 'message') {
      console.log('hi')
      this.index = 1
    } else if (this.$route.path.replace('/', '') === 'account') {
      this.index = 2
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

<style scoped>
#app{
  background-color: #e6ebf2;
}
#app /deep/ .weui-tabbar{
  background-color: #2f2f33
}
#app /deep/ .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
  color:#1391d4
}
</style>

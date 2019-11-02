<template>
  <div>
    <search></search>
    <news-swiper></news-swiper>
    <news></news>
    <member-level></member-level>
    <button @click="getClass">点击</button>
  </div>
</template>

<script>
import search from './components/search'
import newsSwiper from './components/newsSwiper'
import news from './components/news'
import memberLevel from './components/memberLevel'

export default {
  name: 'home',
  components: {
    search,
    newsSwiper,
    news,
    memberLevel
  },
  methods: {
    getClass () {
      var _this = this
      _this.$axios.get('/api/class/getClass', {}).then(response => {
        console.log(response.data)
      })
      // this.$http.post('/api/class/getClass').then(response => {
      //   console.log(response)
      // })
    }
  }
}
</script>

<style scoped></style>

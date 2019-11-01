<template>
  <div>
    <search></search>
    <news-swiper></news-swiper>
    <news></news>
    <button @click="getClass">点击</button>
  </div>
</template>

<script>
import search from './components/search'
import newsSwiper from './components/newsSwiper'
import news from './components/news'

export default {
  name: 'home',
  components: {
    search,
    newsSwiper,
    news
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

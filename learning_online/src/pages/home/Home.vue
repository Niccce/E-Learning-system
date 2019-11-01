<template>
  <div>
    <search></search>
    <news-swiper></news-swiper>
    <button @click="getClass">点击</button>
  </div>
</template>

<script>
import newsSwiper from './components/newsSwiper'
import search from './components/search'

export default {
  name: 'home',
  components: {
    newsSwiper,
    search
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

<template>
  <div>
    home
    <button @click="getClass">点击</button>
    <news-swiper></news-swiper>
  </div>
</template>

<script>
import newsSwiper from './components/newsSwiper'

export default {
  name: 'home',
  components: {
    newsSwiper
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

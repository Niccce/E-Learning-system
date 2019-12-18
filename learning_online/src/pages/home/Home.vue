<template>
  <div>
    <search></search>
    <news-swiper></news-swiper>
    <news></news>
    <member-level></member-level>
    <recommended-courses></recommended-courses>
  </div>
</template>

<script>
import search from './components/search'
import newsSwiper from './components/newsSwiper'
import news from './components/news'
import memberLevel from './components/memberLevel'
import recommendedCourses from './components/recommendedCourses'

export default {
  name: 'home',
  components: {
    search,
    newsSwiper,
    news,
    memberLevel,
    recommendedCourses
  }
}
</script>

<style scoped></style>

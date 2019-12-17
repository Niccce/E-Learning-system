<template>
  <div>
    <swiper
      loop
      auto
      :list="list"
      :index="index"
      dots-position="center"
      dots-class="custom-bottom"
    ></swiper>
  </div>
</template>

<script>
import { Swiper } from 'vux'

const baseList = [
  {
    url: '/news',
    // img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    img: 'https://7n.w3cschool.cn/attachments/knowledge/201804/30601.png',
    title: '送你一朵fua'
  },
  {
    url: '/news',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  },
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg', // 404
    title: '送你一次旅行'
    // fallbackImg:
    //   'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg' // img链接失效就自动用这个
  }
]

const urlList = baseList.map((item, index) => ({
  url: item.url,
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

export default {
  components: {
    Swiper
  },
  data () {
    return {
      list: urlList,
      index: 0
    }
  }
}
</script>

<style scoped></style>

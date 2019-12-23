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
import { Swiper } from "vux";

// const newsList = [
//   {
//     url: "/news",
//     // img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
//     img: "https://7n.w3cschool.cn/attachments/knowledge/201804/30601.png",
//     title: "送你一朵fua"
//   },
//   {
//     url: "/news",
//     img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
//     title: "送你一辆车"
//   },
//   {
//     // url: 'javascript:',
//     url: "/news",
//     img: "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg", // 404
//     title: "送你一次旅行"
//     // fallbackImg:
//     //   'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg' // img链接失效就自动用这个
//   }
// ];

// const urlList = newsList.map((item, index) => ({
//   url: item.url,
//   img: item.img,
//   fallbackImg: item.fallbackImg,
//   // title: `(可点击)${item.title}`
//   title: item.title
// }));

export default {
  components: {
    Swiper
  },
  data() {
    return {
      list: [],
      newsList:[],
      index: 0
    };
  },
  methods: {
    getNews() {
      var _this = this;
      _this.$axios.get("/api/news/getnews", {}).then(response => {
        this.newsList = response.data;
        // console.log(this.newsList);
        const urlList = this.newsList.map((item, index) => (
          console.log(item),
          {
          url: {path: '/news', query: {data:item}},//"/news",
          img: "https://7n.w3cschool.cn/attachments/knowledge/201804/30601.png",
          // fallbackImg: item.fallbackImg,
          // title: `(可点击)${item.title}`
          title: item.new_name
        }));
        this.list=urlList;
        // console.log(urlList)
      });
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style scoped></style>

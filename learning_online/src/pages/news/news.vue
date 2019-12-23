<template>
  <div class="container">
    <x-header>新闻详情</x-header>
    <div class="title">
      <p>{{newsInfo.new_name}}</p>
    </div>
    <div class="info">
      <span>记者:{{newsInfo.new_reporter}}</span>
      <span>{{newsInfo.new_date}}</span>
      <span>{{newsInfo.new_source}}</span>
    </div>
    <div class="content">
      <p>
        {{newsInfo.new_content}}
      </p>
    </div>
  </div>
</template>

<script>
import { XHeader } from "vux";

export default {
  components: {
    XHeader
  },
  methods: {
    getNews() {
     
      var params=this.$route.query.data
      this.newsInfo=params;
       console.log(params)
      // var _this = this;
      // _this.$axios.get("/api/news/getnews", {}).then(response => {
      //   this.coursesList = response.data;
      //   console.log("获取新闻列表");
      //   console.log(this.coursesList);
      // });

    }
  },
  created() {
    this.getNews();
  },
};
</script>

<style scoped>
.container {
  background-color: white;
}
.container /deep/ .vux-header {
  background-color: #2f2f33;
}
.title {
  font-size: 1.8em;
  padding: 0.2em;
}
.info {
  display: flex;
  flex-direction: column;
  padding: 0.3em;
  color: rgb(148, 147, 147)
}
.content {
  font-size: 1.2em;
  line-height: 1.2em;
  padding: 0.3em;
}
</style>

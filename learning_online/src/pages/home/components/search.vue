<template>
  <div class="container">
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
    ></search>
  </div>
</template>

<script>
import { Search } from "vux";

export default {
  components: {
    Search
  },
  data() {
    return {
      coursesList:[]
    }
  },
  methods: {
    setFocus() {
      this.$refs.search.setFocus();
    },
    // 点击搜索结果
    resultClick(item) {
      // window.alert("you click the result item: " + JSON.stringify(item));
    },
    getResult(val) {
      // console.log("on-change", val);
      var _this = this;
      _this.$axios
        .post("/api/class/searchClass", {
          cla_name: val
        })
        .then(response => {
          this.coursesList = response.data;
          // console.log("根据课程名称查询课程信息");
          // console.log(this.coursesList);
          // var courseList=
          if(this.coursesList.length===0){
            this.results =[];
          }else{
            this.results=[{title:response.data[0].cla_name},{}] ;
          }
          // this.results = response.data ? : []
        });
      // this.results = coursesList ? getResult(this.value) : [];
      // this.results = this.coursesList ? getResult(this.value) : [];
      // this.results = val ? getResult(this.value) : []
    },
    onSubmit() {
      // 查询课程
      // var _this = this;
      // _this.$axios
      //   .post("/api/class/searchClass", {
      //     cla_name: "123"
      //   })
      //   .then(response => {
      //     this.coursesList = response.data;
      //     console.log("根据课程名称查询课程信息");
      //     console.log(this.coursesList);
      //   });

      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: "text",
        position: "top",
        text: "搜索"
      });
    },
    onFocus() {
      // console.log("on focus");
    },
    onCancel() {
      // console.log("on cancel");
    }
  },
  data() {
    return {
      results: [],
      value: ""
    };
  }
};

function getResult(val) {
  let rs = [];
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    });
  }
  return rs;
}
</script>

<style scoped>
.container /deep/ .weui-search-bar {
  background-color: #2f2f33;
}
.container /deep/ .weui-search-bar__cancel-btn {
  color: #1391d4;
}
</style>

<template>
  <div>
    <x-header>课程学习</x-header>
    <!-- <group :title="title" class="groupFixed">
      <cell title="15s" v-model="value">
        <countdown v-model="time" @on-finish="finish" v-show="show"></countdown>
      </cell>
    </group> -->
    <div>学习内容:{{ content }}</div>
  </div>
</template>

<script>
// import { XHeader, Countdown, Group, Cell } from "vux";
import { XHeader } from "vux";
export default {
  components: {
    XHeader,
    // Countdown,
    // Group,
    // Cell
  },
  data() {
    return {
      content: "",
      // title:'学习倒计时',
      // show: true,
      // time: 15,
      // value: ""
      canDoExam:false,
      timer:null
    };
  },
  created() {
    this.getParams();
     this.timer = setTimeout(() => {
      this.canDoExam = true;
      console.log(this.canDoExam)
      //改掉progess
    }, 5000)
  },
  methods: {
    getParams() {
      //接收函数
      // console.log(this.$route);
      this.content = this.$route.params.content;
      // 学习完才能考试，修改进度为100
    },
    // finish(index) {
    //   this.show = false;
    //   this.value = "completed";
    //   console.log("current index", index);
    // }
  }
};
</script>

<style scoped>
.groupFixed{
  /* position: absolute;
  bottom: 0em; */
}
</style>

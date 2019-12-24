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
    XHeader
    // Countdown,
    // Group,
    // Cell
  },
  data() {
    return {
      content: "",
      cla_id:'',
      // title:'学习倒计时',
      // show: true,
      // time: 15,
      // value: ""
      // canDoExam: false,
      timer: null
    };
  },
  created() {
    this.getParams();
    this.timer = setTimeout(() => {
      // this.canDoExam = true;
      // console.log(this.canDoExam);
      // var _this = this;
      //修改进度为100
      this.$axios
        .post("/api/menprogress/modifyProgress", {
          mem_id: this.$store.state.userId,
          progress:'100',
          mem_id: this.$store.state.userId,
          cla_id: this.cla_id
        })
        .then(response => {
          this.$vux.toast.text("已完成学习进度，可参与考试");
          console.log(response.data);
        });

    }, 5000);
  },
  methods: {
    getParams() {
      // console.log(this.$route);
      this.content = this.$route.params.content;
      this.cla_id=this.$route.params.cla_id
    }
    // finish(index) {
    //   this.show = false;
    //   this.value = "completed";
    //   console.log("current index", index);
    // }
  }
};
</script>

<style scoped>
/* .groupFixed{ */
/* position: absolute;
  bottom: 0em; */
/* } */
</style>

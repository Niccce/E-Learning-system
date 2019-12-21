<template>
  <div>
    <x-header>课程学习</x-header>
    <div>学习内容</div>
  </div>
</template>

<script>
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  created() {
      this.getParams();
    //   console.log(this.$route.params)
  },
  methods: {
    getParams() {
      //接收函数
      console.log(this.$route);
    //   this.msg = this.$router.history.current.query.name;
    }
  }
};
</script>

<style scoped></style>

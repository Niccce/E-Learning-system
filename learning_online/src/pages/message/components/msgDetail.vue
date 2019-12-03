<template>
  <router-link to="/message/msgDetails">
    <div class="container">
      <div class="top">
        <span>梁彩珠</span>
        <span>回复：</span>
      </div>
      <div class="middle">
        <p>
          真的吗？原来还有这样的解决思路呀？！你好聪明呀，好感谢你哦！我们要不要加一下微信呀？你好聪明呀，好感谢你哦！我们要不要加一下微信呀？
        </p>
      </div>
      <div class="date">
        <span>2019-09-02 15:22</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.container {
  background-color: white;
  padding: 0.8em 0.8em;
  color: black;
  margin-bottom: 0.7em;
  height: 5em;
  box-shadow: .3em .3em .3em 0 rgba(0, 0, 0, 0.267);
}
.top {
  font-size: 1.2em;
  font-weight: bold;
}
.middle {
  font-size: 1em;
  margin-top: 0.5em;
}
.middle p {
  height: 2em;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.date {
  font-size: 0.8em;
  margin-top: 1em;
  text-align: right;
}
</style>

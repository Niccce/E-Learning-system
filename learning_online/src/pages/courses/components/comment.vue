<template>
  <div class="container">
    <div class="user-info">
      <img src="http://q1tum4ulx.bkt.clouddn.com/u=2280731892,2555333731&fm=26&gp=0.jpg" />
      <div class="info">
        <span>Niccce</span>
        <span>2019-12-13</span>
      </div>
    </div>
    <div>
      <div class="comment">
        评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container{
  margin-top: 1em;
}
.container img{
  height: 2.2em;
  width: 2.2em;
  border-radius: 50%;
  border: 1px black solid;
  margin-left: .5em;
}
.user-info{
  display: flex;
  align-items: center;
}
.info{
  display: flex;
  flex-direction: column;
  margin-left: 1em;
}
.comment{
  padding: .5em 1em;
}
</style>

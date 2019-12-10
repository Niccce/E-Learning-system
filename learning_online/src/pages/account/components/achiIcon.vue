<template>
  <div class="container">
    <div class="goal">
      <div class="rectangle"><div>90</div></div>
      <div class="left-triangle"></div>
      <div class="right-triangle"></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.container {
  position: absolute;
  right: 1em;
  top: 0em;
  padding: 0;
  /* background-color: rgb(182, 182, 240); */
}
.goal {
  position: relative;
}
.rectangle {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1em;
  height: 2em;
  width: 2.5em;
  background-color: red;
  /* vertical-align: top; */
  /* display: inline-block; */
}
.left-triangle {
  left: 0;
  /* right: 1em; */
  top: 0em;
  position: relative;
  width: 0px;
  border-top: solid 1.5em rgb(255, 0, 0);
  border-left: solid 0 rgba(0, 0, 0, 0);
  border-right: solid 1.25em rgba(0, 0, 0, 0);
  display: inline-block;
}
.right-triangle {
  /* top: 2em; */
  right: 0em;
  position: absolute;
  width: 0px;
  border-top: solid 1.5em rgb(255, 0, 0);
  border-left: solid 1.25em rgba(0, 0, 0, 0);
  border-right: solid 0 rgba(0, 0, 0, 0);
  display: inline-block;
}
</style>

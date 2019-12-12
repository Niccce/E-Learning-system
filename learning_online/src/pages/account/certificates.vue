<template>
  <div class="container">
    <x-header>我的证书</x-header>
    <div class="finished-head">
      <div class="num">
          <span>累计获得证书</span>
          <span>3项</span>
      </div>
    </div>
    <div>
      <certificate></certificate>
      <certificate></certificate>
      <certificate></certificate>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import certificate from './components/certificate'
export default {
  components: {
    XHeader,
    certificate
  }
}
</script>

<style scoped>
.container /deep/ .vux-header {
  background-color: #2f2f33;
}
.finished-head {
  height: 11em;
  background: url(../../assets/header-bg.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.num span{
  line-height: 2em;
}
.num {
  background-color: #fff;
  height: 7em;
  width: 15em;
  box-shadow: 0.3em 0.3em 0.3em 0 rgba(0, 0, 0, 0.267);
  border-radius: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<template>
  <div>
    home
    <button @click="getClass">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    getClass () {
      var _this = this
      _this.$axios.get('/api/class/getClass', {})
        .then(response => {
          console.log(response.data)
        })
    // this.$http.post('/api/class/getClass').then(response => {
    //   console.log(response)
    }
  }
}

</script>

<style scoped></style>

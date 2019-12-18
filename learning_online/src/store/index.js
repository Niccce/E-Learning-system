import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import mutations from './mutations'
// import actions from './actions'
Vue.use(Vuex)

// vuex中的数据源，我们需要保存的数据就保存在这里，可以在页面通过 this.$store.state来获取我们定义的数据；
const state = {
  showNav: true,
  recommendedCourses: []
}

// state中的变量只能在mutations中通过方法修改
const mutations = {
  saveRecommendedCourses (state, res) {
    state.recommendedCourses = res
    console.log('保存推荐课程列表')
  }
}

// actions就是mutation的加强版，它可以通过commit mutations中的方法来改变状态，最重要的是它可以进行异步操作。
const actions = {
  getRecommendedCourses ({commit}) {
    console.log('action获取推荐课程的信息')
    // var _this = this
    axios.get('/api/class/getClass', {}).then(response => {
      console.log('reC.vue获取推荐课程')
      console.log(response.data)
      commit('saveRecommendedCourses', response.data)
    })
  }
}

// 相当于vue中的computed
const getters = {
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

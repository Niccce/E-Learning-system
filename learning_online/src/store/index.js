import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import mutations from './mutations'
// import actions from './actions'
Vue.use(Vuex);

// vuex中的数据源，我们需要保存的数据就保存在这里，可以在页面通过 this.$store.state来获取我们定义的数据；
const state = {
  showNav: true,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  // token: "",
  userId: "",
  username: "",
  points:'',//积分
  // isLogin: 0,
  recommendedCourses: []
};

// state中的变量只能在mutations中通过方法修改
const mutations = {
  saveRecommendedCourses(state, res) {
    state.recommendedCourses = res;
    // console.log(res)
    console.log("保存推荐课程列表");
  },
  setTokenAndUser(state, res) {
    console.log(res)
    state.token = res.token;
    state.userId = res.userId;
    state.username = res.username;
    state.points = res.points;
    localStorage.setItem("token", res.token); //把token保存到本地
  },
  // changeIsLogin(state, res) {
  //   state.isLogin = res;
  //   console.log("state.isLogin:" + state.isLogin);
  // },
  // delTokenAndUser(state, res) {
  //   state.Token = "";
  //   state.userId = "";
  //   state.userName = "";
  //   localStorage.removeItem("token");
  //   console.log("删除Token、用户");
  // }
};

// actions就是mutation的加强版，它可以通过commit mutations中的方法来改变状态，最重要的是它可以进行异步操作。
const actions = {
  getToken({ commit }, userData) {
    commit("setTokenAndUser", userData);
  },
  // 判断token有无过期
  // validate({ commit }, state) {
  //   axios.post("/api/member/validate", {}).then(response => {
  //     console.log(response);
  //     commit("changeIsLogin", response.data.code);
  //     // return response.data.code;
  //     return new Promise((resolve, reject) => {
  //         resolve({
  //           isTokenAvailable: response.data.code
  //         });
  //       });
  //     // return Promise.resolve(response.data.code);
  //   });
  // },
  getRecommendedCourses({ commit }) {
    // console.log("action获取推荐课程的信息");
    // var _this = this
    axios.get("/api/class/getClass", {}).then(response => {
      // console.log("reC.vue获取推荐课程");
      // console.log(response.data);
      commit("saveRecommendedCourses", response.data);
    });
  }
};

// 相当于vue中的computed
const getters = {
  getStorage(state) {
    // 获取本地存储的登录信息
    if (!state.token) {
      state.token = JSON.parse(localStorage.getItem(key));
    }
    return state.token;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

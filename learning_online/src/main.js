// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/styles/reset.css";
import "./assets/styles/border.css";
import VueResource from "vue-resource";
import axios from "axios";
import store from "./store";
import { ToastPlugin } from "vux";

Vue.use(ToastPlugin);
Vue.use(VueResource);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
const whiteList = ["/", "/regist", "/login"]; // 定义一个白名单列表
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach(async (to, from, next) => {
  if (whiteList.includes(to.path)) {
    next();
    console.log;
  } else {
    var isTokenAvailable;
    // const isTokenAvailable = await store.dispatch("validate"); // 校验token是否失效
    // await store.dispatch("validate");

    // store
    //   .dispatch("validate")
    //   .then(res => {
    //     console.log('res:'+res)
    //     // isTokenAvailable = store.isLogin;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    axios.post("/api/member/validate", {}).then(response => {
      console.log(response);
      // commit("changeIsLogin", response.data.code);
      // console.log()
      // return response.data.code;
      // return new Promise((resolve, reject) => {
      //   resolve({
      isTokenAvailable = response.data.code;
      //   });
      // });
      // return Promise.resolve(response.data.code);
      if (isTokenAvailable === 1) {
        // 如果token未失效
        if (to.path === "/login") {
          // 如果访问的是login页面，则回到首页
          next("/");
        } else {
          // 如果访问的不是login页面，则继续访问当前要访问的页面
          next();
        }
      } else {
        // 如果token失效了
        next("/login");
      }
    });

    // if (isTokenAvailable) {
    //   // 如果token未失效
    //   console.log("2");
    //   if (to.path === "/login") {
    //     // 如果访问的是login页面，则回到首页
    //     next("/");
    //   } else {
    //     // 如果访问的不是login页面，则继续访问当前要访问的页面
    //     next();
    //   }
    // } else {
    //   // 如果token失效了
    //   next("/login");
    // }
  }

  // if (to.path === "/login") {
  //   next();
  // } else {
  //   let token = localStorage.getItem("token");
  //   console.log("路由变换，查看token");
  //   console.log("我是浏览器本地缓存的token: " + token);
  //   if (token === null || token === "" || token === undefined) {
  //     next("/login");
  //     // ToastPlugin.text("请先登录");
  //   } else {
  //     next();
  //   }
  // }
});

// 添加请求拦截器
// 异步请求前在header里加入token
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    //判断是否存在token，如果存在将每个页面header都添加token
    if (store.state.token) {
      // config.headers.Authorization = localStorage.getItem("token");
      config.headers.Authorization = store.state.token;
      // console.log("Authorization:" + localStorage.getItem("token"));
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// http response 拦截器
//异步请求后，判断token是否过期
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           store.dispatch("validate");
//           router.replace({
//             path: "/login",
//             query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
//           });
//       }
//     }
//     return Promise.reject(error.response.data);
//   }
// );

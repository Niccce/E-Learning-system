import Vue from 'vue'
import Router from 'vue-router'
import regist from '@/pages/user/regist.vue'
import login from '@/pages/user/login.vue'
import Home from '@/pages/home/Home.vue'
import Message from '@/pages/message/Message'
import msgDetails from '@/pages/message/msgDetails'
import Account from '@/pages/account/Account'
import myCourse from '@/pages/account/myCourse'
import achievement from '@/pages/account/achievement'
import courses from '@/pages/courses/courses'
import courseDetails from '@/pages/courses/courseDetails'
import certificates from '@/pages/account/certificates'
import news from '@/pages/news/news'
import exam from '@/pages/courses/exam'
import learn from '@/pages/courses/learn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/regist",
      name: "regist",
      component: regist
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        showNav: true
      }
    },
    {
      path: "/message",
      name: "Message",
      component: Message,
      meta: {
        showNav: true
      }
    },
    {
      path: "/message/msgDetails",
      name: "msgDetails",
      component: msgDetails
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      meta: {
        showNav: true
        // navIndex: 0
      }
    },
    {
      path: "/account/myCourse",
      name: "myCourse",
      component: myCourse
    },
    {
      path: "/account/achievement",
      name: "achievement",
      component: achievement
    },
    {
      path: "/account/certificates",
      name: "certificates",
      component: certificates
    },
    {
      path: "/courses",
      name: "courses",
      component: courses // 会员分类课程
    },
    {
      path: "/courses/courseDetails",
      name: "courseDetails",
      component: courseDetails
    },
    {
      path: "/news",
      name: "news",
      component: news
    },
    {
      path: "/courses/learn",
      name: "learn",
      component: learn
    },
    {
      path: "/courses/exam",
      name: "exam",
      component: exam
    }
  ]
});

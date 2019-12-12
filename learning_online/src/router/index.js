import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Message from '@/pages/message/Message'
import msgDetails from '@/pages/message/msgDetails'
import Account from '@/pages/account/Account'
import finished from '@/pages/account/finished'
import achievement from '@/pages/account/achievement'
import courses from '@/pages/courses/courses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        showNav: true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        showNav: true
      }
    },
    {
      path: '/message/msgDetails',
      name: 'msgDetails',
      component: msgDetails
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        showNav: true
        // navIndex: 0
      }
    },
    {
      path: '/account/finished',
      name: 'finished',
      component: finished
    },
    {
      path: '/account/achievement',
      name: 'achievement',
      component: achievement
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    }
  ]
})

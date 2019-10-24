import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Message from '@/pages/message/Message'
import Account from '@/pages/account/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        isNavShow: true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        isNavShow: true
      }
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        isNavShow: true
      }
    }
  ]
})

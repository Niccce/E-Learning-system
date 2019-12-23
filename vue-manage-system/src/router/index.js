import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '首页' }
                },
                {
                    path: '/NewsManaged',
                    name: 'NewsManaged',
                    component: () => import(/* webpackChunkName: "NewsManaged" */ '../components/page/NewsManaged.vue'),
                    meta: { title: '管理新闻' }
                },
                {
                    path: '/NewsReleased',
                    name: 'NewsReleased',
                    component: () => import(/* webpackChunkName: "NewsReleased" */ '../components/page/NewsReleased.vue'),
                    meta: { title: '发布新闻' }
                },
                {
                    path: '/CourseManaged',
                    name: 'CourseManaged',
                    component: () => import(/* webpackChunkName: "CourseManaged" */ '../components/page/CourseManaged.vue'),
                    meta: { title: '管理课程' }
                },
                {
                    path: '/CourseReleased',
                    name: 'CourseReleased',
                    component: () => import(/* webpackChunkName: "CourseReleased" */ '../components/page/CourseReleased.vue'),
                    meta: { title: '发布课程' }
                },
                {
                    path: '/TestManaged',
                    name: 'TestManaged',
                    component: () => import(/* webpackChunkName: "TestManaged" */ '../components/page/TestManaged.vue'),
                    meta: { title: '管理考试' }
                },
                {
                    path: '/TestReleased',
                    name: 'TestReleased',
                    component: () => import(/* webpackChunkName: "TestReleased" */ '../components/page/TestReleased.vue'),
                    meta: { title: '发布考试' }
                },
                {
                    path: '/CertificateManaged',
                    name: 'CertificateManaged',
                    component: () => import(/* webpackChunkName: "CertificateManaged" */ '../components/page/CertificateManaged.vue'),
                    meta: { title: '证书管理' }
                },
                {
                    path: '/MessageManaged',
                    name: 'MessageManaged',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/MessageManaged.vue'),
                    meta: { title: '消息管理' }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        }
    ]
});

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',  // 匹配没有注册的路由
      redirect: '/home'  //重定向
    },
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login.vue'], resolve),
    }, {
      path: '/guideView',
      name: 'guideView',
      component: resolve => require(['@/views/GuideView/guideView.vue'], resolve),
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/index/home.vue'], resolve),
    }
  ]
})

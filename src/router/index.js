import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',  // 匹配没有注册的路由
      redirect: '/home'  //重定向
    },
    {// 登录页
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login.vue'], resolve),
    },
    {// 注册
      path: '/register',
      name: 'register',
      component: resolve => require(['@/views/register/register.vue'], resolve),
    },
    {// 忘记密码
      path: '/setPassWord',
      name: 'setPassWord',
      component: resolve => require(['@/views/passWord/setPassWord.vue'], resolve),
    },{// 密码管理
      path: '/passWord',
      name: 'passWord',
      component: resolve => require(['@/views/passWord/passWord.vue'], resolve),
    }, {// 引导页
      path: '/guideView',
      name: 'guideView',
      component: resolve => require(['@/views/GuideView/guideView.vue'], resolve),
    },
    {// 主页
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/index/home.vue'], resolve),
    }
  ]
})

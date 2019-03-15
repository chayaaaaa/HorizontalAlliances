// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as FastClick from "fastclick"
import App from './App'
import axios from 'axios'
import router from './router'
import './styles/theme.styl'
import './styles/global.css'
import '@/commonJS/rem.js'
import 'normalize.css' // css样式初始化
import 'flex.css' // flex弹性布局
FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;// 将axios挂载到prototype上
/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
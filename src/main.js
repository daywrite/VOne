import Vue from 'vue'
import App from './App'

/* 引入ajax请求数据 */
import VueResource from 'vue-resource'
/* 引入vue-router0.7.3版本 */
import VueRouter from 'vue-router'
/* 引入Vuex */
import store from './vuex/store'

/* 全局引入jquery */
import 'jquery'
/* 引入字体图标 */
import './assets/font-awesome/css/font-awesome.css'
/* 引入bootstrap */
import './assets/css/bootstrap.css'
import './assets/js/bootstrap'
/* 引入框架CSS、侧面菜单css、js */
import './assets/css/all.css'
import './assets/css/metisMenu/metisMenu.css'
import './assets/css/metisMenu/metisMenu'
/* $(document).ready() */
import './assets/js/all'

/* mock模拟数据全局加载 */
import Mock from './mock/index'
Mock.bootstrap()

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
  linkActiveClass: 'active'
})
router.map({
  '/home': {
    name: 'home',
    component: function (resolve) {
      require(['./components/Home'], resolve)
    }
  }
})
router.redirect({
  '*': '/home'
})
router.start(App, '#app')

/* eslint-disable no-new */
new Vue({
  /* 挂载Vuex */
  store,
  el: 'body',
  components: { App }
})

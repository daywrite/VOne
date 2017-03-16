import Vue from 'vue'
import App from './App'

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
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

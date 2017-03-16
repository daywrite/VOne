import Vue from 'vue'
import App from './App'

/* 全局引入jquery */
// import $ from 'jquery'
/* 引入bootstrap */
import './assets/css/bootstrap.css'
import './assets/js/bootstrap'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

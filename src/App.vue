<template>
  <div id="wrapper">
      <Top></Top>
      <Content><router-view></router-view></Content>
  </div>
</template>

<script>
import Top from './components/layout/Top'
import Content from './components/layout/Content'
/* 引入jquery
   import jQuery from 'jquery'
   jQuery('#app').css('background-color', 'red') */
// import $ from 'jquery'
import store from './vuex/store'
export default {
  store: store,
  components: {
    Top,
    Content
  },
  ready () {
    // $('#app').css('background-color', 'red')
  }
}
</script>

<style>
</style>

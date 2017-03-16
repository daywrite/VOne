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
export default {
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

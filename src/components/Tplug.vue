<template>
  <div class="row">
    <div class="col-lg-12">
      <h1 class="page-header">测试组件</h1>
    </div>
    <div class="col-lg-3">
      <button type="button" class="btn btn-default" @click="updateTest">$nextTick</button>
      <div id="test">
        {{test}}
      </div>
    </div>
    <div class="col-lg-3">
      <button type="button" class="btn btn-default" @click="setDate">$set</button>
      <div id="test">
        {{setdate}}
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'tplug',
  data () {
    return {
      test: '789'
    }
  },
  ready () {
  },
  methods: {
    updateTest: function () {
      this.test = 'updated12'
      console.log($('#test').text())
      this.$nextTick(function () {
        console.log($('#test').text())
      })
    },
    setDate: function () {
      this.$set('setdate', 'helloworld')
    }
  }
}
</script>
<style>
  #test {
    display: inline;
  }
</style>

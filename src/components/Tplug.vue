<template>
  <div class="row">
    <div class="col-lg-12">
      <h1 class="page-header">测试组件</h1>
    </div>
    <div class="col-lg-12">
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
    <div class="col-lg-3">
      <button type="button" class="btn btn-default" @click="btnDirective">directive</button>
      <div v-demo="{color: 'whit'}"></div>
      <div id="demo1" v-demo1:hello.a.c.b="test"></div>
    </div>
    <div class="col-lg-3">
      <button type="button" class="btn btn-default">filter</button>
      <div>
        {{filterMessage | reverse}}
      </div>
      </div>
    </div>
    </div>
    <div class="col-lg-12">
      <div class="col-lg-3">
        <button type="button" class="btn btn-default" @click="transition1">transititon</button>
        <div v-if="show" transition="expand">helloWorld</div>
      </div>
      <div class="col-lg-3">
      <index></index>
      </div>
    </div>

  </div>
</template>
<script>
import $ from 'jquery'
import Vue from 'vue'
/* 引入组件 */
import index from './Tplug/index.vue'
export default {
  name: 'tplug',
  data () {
    return {
      test: '789',
      filterMessage: '1,1,1',
      show: true
    }
  },
  created () {
    /* */
    Vue.filter('reverse', function (value) {
      return value.split(',').join('')
    })
    /* 指令 */
    Vue.directive('demo1', {
      bind: function () {
        console.log('demo bound!')
      },
      update: function (value) {
        this.el.innerHTML =
        'name - ' + this.name + '<br>' +
        'expression - ' + this.expression + '<br>' +
        'argument - ' + this.arg + '<br>' +
        'modifiers - ' + JSON.stringify(this.modifiers) + '<br>' +
        'value - ' + value
      }
    })
    Vue.directive('demo', function (value) {
      console.log(value.color)
    })
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
    },
    btnDirective: function () {

    },
    transition1: function () {
      this.show = !this.show
    },
    childrenMethod: function () {
      console.log('this.$parent.children')
    }
  },
  watch: {
    'show': function (val, oldVal) {
      console.log(`新${val}-老${oldVal}`)
    }
  },
  components: {
    index
  }
}
</script>
<style>
#test {
  display: inline;
}

/* 必需 */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>

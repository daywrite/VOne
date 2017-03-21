<template>
  <div>
    子组件  
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: '789'
    }
  },
  ready () {
    this.$parent.childrenMethod()
  }
}
</script>
<style>
</style>

<template>
  <div id="page-wrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'content',
  data () {
    return {
      message: 'helloworld'
    }
  }
}
</script>
<style>

</style>

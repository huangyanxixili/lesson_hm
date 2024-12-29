<template>
  <!-- html -->
  <Person1 />
</template>

<script>
  // JS
  import Person1 from './components/Person1.vue'

  export default {
    name: 'App', // 组件名
    components: { Person1 } // 注册组件
  }
</script>

<style>
  /* 样式 */
</style>
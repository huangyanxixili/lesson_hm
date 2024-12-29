<template>
  <!-- html -->
  <Person />
</template>

<script>
  // JS
  import Person from './components/Person.vue'

  export default {
    name: 'App', // 组件名
    components: { Person } // 注册组件
  }
</script>

<style>
  /* 样式 */
</style>
<script setup>
import { ref } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'

const count = ref(0);
function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <CompA :count="count" @add="increment"/>
    <CompB :count="count"/>
  </div>
</template>

<style scoped>

</style>

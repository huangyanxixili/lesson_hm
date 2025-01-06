<script setup>
// composition API 
import {
  ref,          // 简单数据类型
  reactive      // 复杂数据类型
} from 'vue'

// 组合API 
// counter 计数业务
const counter = ref(0); 
const increment = () => {
  counter.value++; // 值的修改
}

// user from 对象数据业务 
const state = reactive({
  name: 'Alice',
  age: 25
}); // 复杂数据类型

const updataState = () => {
  state.name = 'Bob';
  state.age++;
}
</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">Increment</button>

    <p>Name: {{ state.name }}</p>
    <p>Age: {{ state.age }}</p>
    <button @click="updataState">Updata State</button>
  </div>
</template>

<style scoped>

</style>
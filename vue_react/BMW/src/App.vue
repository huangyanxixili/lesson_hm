<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue';
import { ref } from 'vue';

// option 选项式 API -> 组合式 Composition API
const showComponent = ref(true); // show Component(显示组件)
const toggleComponent = () => {
  showComponent.value = !showComponent.value;
}

const width = ref(100);
const change = () => {
  width.value += 100;
}

const count = ref(0);
const incrementCount = () => {
  count.value++;
}
</script>

<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>
    <button @click="incrementCount">Increment Count</button>
    <p>Count: {{ count }}</p>
    <transition name="fade">
      <LifecycleComponent v-if="showComponent" :count="count"/>
    </transition>

    <div class="box1" :style="{width: width + 'px'}"></div>
    <button @click="change">click</button>

    <!-- vue内置组件 -->
    <transition name="fade">
      <h1 v-if="showComponent">你好 vue transition</h1>
    </transition>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.box1 {
  background-color: #d88086;
  height: 100px;
  transition: width 1s;
}

/* 定义淡入淡出的过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在 Vue < 2.1.8 */ {
  opacity: 0;
}
</style>

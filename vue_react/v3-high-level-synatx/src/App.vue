<script setup>
import DeepWatchExample from './components/DeepWatchExample.vue';
import { 
  ref,
  watch,
  watchEffect,
} from 'vue'

// 利用count 变化后做一些事情 => 复杂的 function log 例如：抖音视频推荐算法 发送 停留的时间
// 页面模板的响应式更新
// computed 计算属性 => 重新计算
const num = ref(100)
function incrementNum() {
  num.value++;
}

const count = ref(0)
function increment() {
  count.value++;
}

// watch 可以监听响应式数据的变化
//      第一个参数：要监听的响应式数据
//      第二个参数：变化后的回调函数 => 有俩个参数 newValue 新值 oldValue 旧值
watch(count, (newValue, oldValue) => {
  // state状态的改变
  // console.log('count 变化了', newValue, oldValue)
  if(newValue % 2 === 0){
    console.log('count 是偶数')
  } else {
    console.log('count 是奇数')
  }
}, {
  immediate: true
})

// 监听 订阅发布者模式（观察者模式）
// effect 副作用 无需指定监听的数据，只要页面模板内包含的响应式数据变化，都会触发
watchEffect(() => {
  console.log(`当前的count值是：${count.value + num.value}`);
})
</script>

<template>
<div>
  <DeepWatchExample />
  <p>计数器:{{ count }}</p>
  <button @click="increment">增加</button>

  <p>计数器二:{{ num }}</p>
  <button @click="incrementNum">增加2</button>
</div>
</template>

<style scoped>

</style>

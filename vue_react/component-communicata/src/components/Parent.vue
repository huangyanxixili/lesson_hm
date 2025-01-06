<template>
    <div>
        <Child ref="comp"/>
        <button @click="handlerClick">按钮</button>
    </div>
</template>

<script setup>
import { ref } from 'vue' 
import Child from './Child.vue'

const comp = ref(null); // 标记DOM 元素 （最开始为 null 表示组件未挂载）
const title = ref('hello') // 标记数据

const handlerClick = () => {
    console.log(comp.value.childName);
    comp.value.someMethod();
    // console.log(title);
}
</script>

<style scoped>

</style>
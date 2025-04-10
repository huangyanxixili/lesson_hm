<template>
    <div>
        {{ typeof user.age }}
        <p>姓名: {{ user.name }}</p>
        <input v-model="user.name" placeholder="输入姓名" />
        <p>年龄: {{ user.age }}</p>
        <input type="number" v-model.number="user.age" placeholder="输入年龄" />
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';

// 定义一个嵌套的对象作为响应式数据
const user = ref({
    name: '张三',
    age: 25,
    hometown: {
        city: {
            // deep 深处（watch获取不到这里的信息）
            name: '北京', // 修改为 南昌
            code: '1000'
        }
    }
});

// 使用 watch 监听 user 对象的变化，并设置 deep 为 true
// watch(user, (newVal, oldVal) => {
//     console.log('user 发生了变化');
//     console.log('新值:', newVal);
//     console.log('旧值:', oldVal);
// }, {
//     deep: true, // 深度监听，包括对象内部的变化
//     immediate: true // 立即执行一次
// });

// 会默认执行一次（无需immediate）
// watchEffect 不需要配置deep 会自动进行深度监听
watchEffect(() => {
    console.log(`user 发生了变化 ${JSON.stringify(user)}`);
})
</script>
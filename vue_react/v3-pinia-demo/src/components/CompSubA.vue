<template>
    <div>
        CompSubA
        {{ count }}
        <hr>
        {{ counterStore.count }}
    </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore(); // 本地和中央连接的过程
// const { count } = counterStore; // 只拿到了值，但是响应式丢失了
const { count } = toRefs(counterStore);
</script>

<style  scoped>

</style>
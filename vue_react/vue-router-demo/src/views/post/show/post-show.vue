<template>
    <div>
        <div>PostShow {{ postId }}</div>
        <hr>
        <router-view/>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"
const route = useRoute() // 获取当前路由信息
// console.log(route);
const { postId } = route.params // 获取当前路由参数
</script>

<style scoped>

</style>
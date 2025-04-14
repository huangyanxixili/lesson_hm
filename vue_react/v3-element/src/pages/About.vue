<template>
    <div>
        About
    </div>
</template>

<script setup>
// 发送请求到 /api/user/info 获取用户信息
import { onMounted } from 'vue'
import { getUserInfo } from '../api/index.js'

onMounted(() => {
    const getUserInfoCb = async () => {
        // 本地的token 在http 请求中带上
        const res = await getUserInfo();
        console.log(res);
    }
    getUserInfoCb();
})
</script>

<style scoped>

</style>
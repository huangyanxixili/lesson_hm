<template>
    <div>
        About {{ username  }}
    </div>
</template>

<script setup>
// 发送请求到 /api/user/info 获取用户信息
import { onMounted, ref } from 'vue'
import { getUserInfo } from '../api/index.js'

const username = ref("")
onMounted(() => {
    const getUserInfoCb = async () => {
        // 本地的token 在http 请求中带上
        const res = await getUserInfo();
        // console.log(res);
        username.value = res.data.user || "";
    }
    getUserInfoCb();
})
</script>

<style scoped>

</style>
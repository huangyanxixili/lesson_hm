<template>
    <el-form
        style="position: absolute;left: 45%"
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="auto"
    >
        <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" size="small"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password" size="small"/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="loading">
                登录
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { login } from '../api/index.js';

const formRef = ref(null);
// 表单数据
const form = reactive({
    name: '',
    password: ''
})
const rules = {
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ]
}
const loading = ref(false);
const onSubmit = async () => {
    // console.log(formRef.value);
    loading.value = true;
    await formRef.value.validate(async (valid) => {
        // 基于 Token 的身份验证流程：
        // 1. 前端发送登录请求给后端（通常是 HTTP 请求）
        // 2. 后端在数据库中查找验证 账户和密码 是否正确
        // 3. 验证成功并且发送一个凭证（token）给前端（通常是JWT）
        // 4. 前端接收后将token存储在本地等，并且以后向后端的请求 都需要携带这个凭证（token）
        // 5. 服务器可以解析这个凭证（token），得到用户对象、

        // 注：(就像出国的签证，在一段时间内通过这个签证可以无限次进出这个国家)
        // Token 的作用：Token 是一种“临时通行证”，它允许用户在有效期内无需重复输入账号和密码即可访问受保护的资源。
        //          （在时限内可以任意开关页面或刷新页面无需重新登录）
        // Token 的生命周期：Token 的有效期决定了用户可以在多长时间内保持登录状态。一旦过期，用户需要重新登录。
        if (valid) { // 校验通过，执行登录逻辑
            console.log('验证成功');
            const res = await login(form);
            // console.log(res);
            if(res.data.code === 200) { // 登录成功
                console.log(res.data.data);
            } else { // 登录失败
                console.log(res.data.message);
            }
        } else {
            console.log('验证失败');
        }
    });
}
</script>

<style scoped>

</style>
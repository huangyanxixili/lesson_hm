<template>
    <div class="person">
        <h2>姓名： {{ name }}</h2>
        <h2>年龄： {{ age }}</h2>
        <button @click="changeName">修改名字</button>
    </div>
</template>

<script setup>
    let name = '张三'
    function changeName() {
        name = 'zhangsan'
    }

    let age = 18
    function changeAge() {
        age = 20
    }
</script>

<style scoped>
    .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px; 
    }
    button {
        margin:0 5px;
    }
</style>




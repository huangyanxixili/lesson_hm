<template>
    <div class="person">
        <h2>测试： {{ a }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Person',
    }
</script>

<script setup>
    let a = 100
</script>

<!-- 
相当于下面的代码
<script>
    setup () {
        let a = 100
        return { a }
    }
</script> 
-->

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
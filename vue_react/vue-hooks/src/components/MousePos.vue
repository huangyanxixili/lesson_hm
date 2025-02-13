<template>
    <div>
        <p>Mouse X: {{ mousePos.x }}</p>
        <p>Mouse Y: {{ mousePos.y }}</p>
    </div>
</template>

<script setup>
import { 
    // composition API
    reactive,
    onMounted // 生命周期（life cycle）
} from 'vue'

// const x = ref(0)
// const y = ref(0)

const mousePos = reactive({
    x: 0,
    y: 0
})
onMounted(() => {
    window.addEventListener('mousemove', (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        console.log('我还在......')
    })
})
</script>

<style scoped>

</style>
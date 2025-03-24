<template>
    <div>
        CompSubA
        {{ count }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    count: {
        type: Number,
        required: true
    } 
})
</script>

<style  scoped>

</style>

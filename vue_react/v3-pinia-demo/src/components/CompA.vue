<template>
    <div>
        <h2>CompA</h2>
        <p>count: {{ props.count }}</p>
        <button @click="addCount">Add</button>
        <CompSubA :count="props.count"/>
    </div>
</template>

<script setup>
import { 
    defineProps,
    defineEmits
} from 'vue';

import CompSubA from './CompSubA.vue';

const emits = defineEmits(['add']);
const props = defineProps({
    count: {
        type: Number,
        required: true
    }
})

function addCount() {
    emits('add');
}
</script>

<style scoped>

</style>
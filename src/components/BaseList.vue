<template>

<ul>
    <li v-for="important in importantArray" :key="important.index">
        {{ important }}
    </li>
</ul>

</template>

<script setup>

import { ref } from 'vue'
  
const props = defineProps({
    importantArray: {
        type: Array,
        required: false,
    }
})

const importantArray = ['Very important', 'Important', 'Less']

</script>

<style>

</style>
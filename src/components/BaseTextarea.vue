<template>
    <div class="input-wrapper">
      <textarea v-model="inputValue" :placeholder="placeholder"></textarea>
    </div>
  </template>
  
<script setup>

import { ref, watch } from 'vue'
  
const props = defineProps({
      modelValue: {
        type: String,
        required: false,
        default: ''
      },
      placeholder: {
        type: String,
        required: false
      }
})

const inputValue = ref(props.modelValue)
    
watch(inputValue, (newValue) => {
        emit('update:modelValue', newValue)
        return {
            inputValue
        }
 })

</script>
  
<style scoped>

input {
  padding: 16px 26px;
  margin-bottom: 30px;
  border-radius: 20px;
}

</style>
<template>
  <p :class="['p-for-input', {'unvisible': props.label == undefined}]">{{ label }}</p>
  <slot></slot>

  <div :class="['error', {'unvisible': props.label == undefined}]">
    <p>{{ error }}</p>
    <p>{{ props.anotherError }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
  error?: string;
  anotherError?: string;  
}>();
</script>

<style>
.p-for-input {
  margin-top: 10px;
  color: rgb(78, 78, 78);
}

.unvisible {
  display: none;
}

.error {
  text-align: center;
  color: red;
}
</style>

<template>
  <p class="p-for-input">{{ label }}</p>
  <slot></slot>

  <div class="error">
    <p>{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string;
  error?: string;
}>();
</script>

<style>
.p-for-input {
  margin-top: 10px;
  color: rgb(78, 78, 78);
}

.error {
  text-align: center;
  color: red;
}
</style>

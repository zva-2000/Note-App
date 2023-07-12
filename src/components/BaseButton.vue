<template>
  <button type="button">
    {{ value }}
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  value: String,
});
</script>

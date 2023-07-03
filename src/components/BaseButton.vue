<template>
  <button @click="onClick" class="btn">
    {{ value }}
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({ value: String });

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click", event);
};
</script>

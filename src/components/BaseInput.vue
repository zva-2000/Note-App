<template>
  <div class="input-wrapper">
    <input :type="type" v-model="model" :placeholder="placeholder" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: string;
  type: string;
  placeholder: string;
}>();

const model = computed({
  get() {
    return props.value ?? '';
  },
  set(value) {
    emit('update:value', value);
  },
});

const emit = defineEmits(['update:value']);
</script>

<style scoped></style>

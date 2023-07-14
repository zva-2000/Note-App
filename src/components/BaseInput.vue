<template>
  <div class="input-wrapper">
    <input :type="type" v-model="model" :placeholder="placeholder" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

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

<style scoped>
input {
  margin-top: 10px;
  padding: 16px 26px;
  margin-bottom: 10px;
  border-radius: 20px;
}
</style>

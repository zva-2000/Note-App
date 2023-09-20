<template>
  <div class="input-wrapper">
    <FieldBase :label="label" :errors="errors">
      <textarea v-model="model" :placeholder="placeholder"></textarea>
    </FieldBase>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import FieldBase from './FieldBase.vue';

const props = defineProps<{
  errors?: string[];
  label?: string;
  value: string;
  placeholder?: string;
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
  padding: 16px 26px;
  margin-bottom: 30px;
  border-radius: 20px;
}
</style>

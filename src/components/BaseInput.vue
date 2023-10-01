<template>
  <div class="input-wrapper">
    <FieldBase :label="label" :error="error" :anotherError="anotherError">
      <input
        :type="type"
        :placeholder="placeholder"
        :readonly="isReadonly"
        v-model="model"
      />
      <slot></slot>
    </FieldBase>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import FieldBase from './FieldBase.vue';

const props = defineProps<{
  error?: string;
  label?: string;
  value?: string;
  type: string;
  placeholder?: string;
  isReadonly?: boolean;
  anotherError?: string;
}>();

const emit = defineEmits<{
  [x: string]: any;
  (e: 'update:value', value: string): void;
}>();

const model = computed({
  get() {
    return props.value ?? '';
  },
  set(value: string) {
    emit('update:value', value);
  },
});
</script>

<style scoped></style>

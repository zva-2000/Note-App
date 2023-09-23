<template>
  <div class="input-wrapper">
    <FieldBase :label="label" :error="error">
      <input
        :type="type"
        :placeholder="placeholder"
        :readonly="isReadonly"
        v-model="model"
      />
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
  numberValue?: number;
  type: string;
  placeholder?: string;
  isReadonly?: boolean;
}>();

const emit = defineEmits<{
  [x: string]: any;
  (e: 'update:value', value: string): void;
  (e: 'update:numberValue', numberValue: number): void;
}>();

const model = computed({
  get() {
    return props.value ?? '';
  },
  set(value: string) {
    emit('update:value', value);
  },
});

// const model = computed({
//   get() {
//     return {
//       value: props.value ?? '',
//       numberValue: props.numberValue ?? 0
//     };
//   },
//   set({ value, numberValue }) {
//     if (value !== undefined) {
//       emit('update:value', value);
//     }
//     if (numberValue !== undefined) {
//       emit('update:numberValue', numberValue);
//     }
//   }
// });
</script>

<style scoped></style>

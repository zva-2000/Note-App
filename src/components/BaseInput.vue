<template>
  <div class="input-wrapper">
    <FieldBase :label="label" :errors="error">
      <input
        :type="type"
        :value="value"
        :numberValue="numberValue"
        @update:value="localValue = $event"
        @update:numberValue="localNumberValue = $event"
        :placeholder="placeholder"
        :readonly="isReadonly"
      />
    </FieldBase>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

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

const localNumberValue = ref(props.numberValue);

const localValue = ref(props.value);

const emit = defineEmits<{
  [x: string]: any;
  (e: 'update:value', value: string): void;
  (e: 'update:numberValue', numberValue: number): void;
}>();

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

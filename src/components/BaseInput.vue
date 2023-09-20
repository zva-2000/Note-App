<template>
<div class="input-wrapper">

  <FieldBase :label="label" :errors="errors">
    <input
      :type="type"
      v-model="model"
      :placeholder="placeholder"
      :readonly="isReadonly"
    />
  </FieldBase>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import FieldBase from './FieldBase.vue';

const props = defineProps<{
  errors?: string[];
  label?: string;
  value?: string;
  numberValue?: number;
  type: string;
  placeholder?: string;
  isReadonly?: boolean;
}>();

const model = computed({
  get() {
    return {
      value: props.value ?? '',
      numberValue: props.numberValue ?? 0
    };
  },
  set({ value, numberValue }) {
    if (value !== undefined) {
      emit('update:value', value);
    }
    if (numberValue !== undefined) {
      emit('update:numberValue', numberValue);
    }
  }
});


const emit = defineEmits(['update:value', 'update:numberValue']);
</script>

<style scoped></style>

<template>
  <div class="input-wrapper">
    <FieldBase :label="label" :errors="error">
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
import { ref, computed } from 'vue';

import FieldBase from './FieldBase.vue';

const props = defineProps<{
  error?: string;
  label?: string;
  numberValue?: number;
  type: string;
  placeholder?: string;
  isReadonly?: boolean;
}>();

const emit = defineEmits<{
  [x: string]: any;
  (e: 'update:numberValue', numberValue: number): void;
}>();

const model = computed({
  get() {
    return props.numberValue ?? '';},
  set(numberValue: number) {
    emit('update:numberValue', numberValue);
}});

</script>

<style scoped></style>

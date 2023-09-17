<template>
  <div class="input-wrapper">
    <input :type="type" v-model="model" :placeholder="placeholder" :readonly="isReadonly" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: string;
  type: string;
  placeholder: string;
  isReadonly: boolean; 
}>();

// const model = computed({
//   get() {
//   return {
//     stringValue: props.value ?? '',
//     numberValue: props.numberValue ?? 0
//   };
// },
// set({ stringValue, numberValue }) {
//   emit('update:value', stringValue);
//   emit('update:numberValue', numberValue);
// }
// });

const model = computed({
  get() {
    return props.value ?? '';
  },
  set(value) {
    emit('update:value', value);
  },
});

const emit = defineEmits(['update:value', 'update:numberValue']);
</script>

<style scoped></style>

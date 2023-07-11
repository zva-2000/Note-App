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

// const inputValue = ref(props.modelValue);

const emit = defineEmits(['update:value']);

// watch(inputValue, (newValue) => {
//   emit('update:modelValue', newValue);
// });

// const data = useVModel(props, 'modelValue', emit)
</script>

<style scoped>
input {
  padding: 16px 26px;
  margin-bottom: 30px;
  border-radius: 20px;
}
</style>

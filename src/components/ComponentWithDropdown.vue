<template>
  <div class="dropdown">
    <BaseInput
      name="imprInput"
      v-model:value="model"
      @click="toggleVisibility"
      placeholder=""
      type="text"
      :isReadonly="true"
      :label="label"
    />
    <BaseList
      v-if="!isVisible"
      :items="options"
      v-click-outside="toggleVisibility"
      @choose-item="chooseImportance"
    />
  </div>
</template>

<script setup lang="ts">
import BaseList from './BaseList.vue';

import BaseInput from './BaseInput.vue';

import { ref, computed } from 'vue';

const props = defineProps<{
  value: string;
  options: string[];
  label?: string;
}>();

const emit = defineEmits<{
  (e: 'update:option', option: string): void;
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

let isVisible = ref(true);

const chooseImportance = (option: string) => {
  emit('update:value', option);
  isVisible.value = true;
};

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style>
.dropdown {
  position: relative;
  margin-bottom: 10px;
}
</style>

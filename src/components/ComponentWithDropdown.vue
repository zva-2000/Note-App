<template>
  <div class="dropdown">
    <InputForDropdown
      name="imprInput"
      v-model:value="model"
      @click="toggleVisibility"
      placeholder="Выберите важность заметки"
    />
    <BaseList :items="options" :is-visible="isVisible" @choose-item="chooseImportance"/>
  </div>
</template>

<script setup lang="ts">
import InputForDropdown from './InputForDropdown.vue';

import BaseList from './BaseList.vue';

import { ref, computed } from 'vue';

const props = defineProps<{
  value: string;
  options: string[];
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

const emit = defineEmits<{
  (e: 'update:value', option: string): void;
}>();

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
  display: inline-block;
}

</style>

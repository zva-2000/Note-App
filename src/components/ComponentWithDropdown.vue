<template>
  <div class="dropdown">
    <BaseInput
      name="imprInput"
      v-model:value="model"
      @click="toggleDropdown"
      placeholder=""
      type="text"
    />
    <BaseList
      :items="options"
      :is-visible="isDropdownOpen"    
      @choose-item="chooseImportance"
      :is-any-dropdown-open="isAnyDropdownOpen"
    />
  </div>
</template>

<script setup lang="ts">
import BaseList from './BaseList.vue';

import BaseInput from './BaseInput.vue';

import { ref, computed } from 'vue';

import { useVisible } from '../composables/useVisible.ts'

const { isDropdownOpen, toggleDropdown, isAnyDropdownOpen } = useVisible();

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
}
</style>

<template>
  <div class="dropdown">
    <InputForDropdown
      name="imprInput"
      v-model:value="model"
      @click="toggleVisibility"
      placeholder="Выберите важность заметки"
    />
    <ul v-if="!isVisible" style="cursor: pointer">
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="chooseImportance(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import InputForDropdown from './InputForDropdown.vue';

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

<style></style>

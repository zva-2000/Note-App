<template>
  <div class="dropdown">
    <InputForDropdown
      name="imprInput"
      v-model:value="model"
      @click="toggleVisibility"
      placeholder="Выберите важность заметки"
    />
    <ul v-if="!isVisible" class="dropdown-content">
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

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  background-color: #f1f1f1;
  min-width: 160px;
  margin-bottom: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* z-index: 1; */
  top: 100%;
}

/* .dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
} */
</style>

<template>
  <div class="dropdown">
    <InputForDropdow
      name="imprInput"
      v-model:value="note.impr"
      @inputClick="Visibility"
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
import InputForDropdow from './InputForDropdow.vue';

import { ref } from 'vue';

const props = defineProps<{
  note: { impr: string };
  options: string[];
}>();

let isVisible = ref(true);

const emit = defineEmits<{
  (e: 'chooseImportance', payload: MouseEvent): void;
}>();

const chooseImportance = (option: string) => {
  props.note.impr = option;
  isVisible.value = true;
};

const Visibility: any = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style></style>

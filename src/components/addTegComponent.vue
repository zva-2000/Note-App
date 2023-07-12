<template>
  <div class="dropdown">
    <p class="Error">{{ error }}</p>
    <InputForDropdown
      name="inputTeg"
      v-model:value="note.teg"
      @click="toggleVisibility"
      placeholder="Выберите группу"
    />
  </div>
  <ul v-if="!isVisible">
    <li v-for="(tegOne, index) in tegs" :key="index" @click="chooseTeg(tegOne)">
      {{ tegOne }}
    </li>
  </ul>
  <base-button @click="addTegFunction">
    <span>+</span>
  </base-button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import InputForDropdown from './InputForDropdown.vue';

import BaseButton from './BaseButton.vue';

const props = defineProps<{
  note: { teg: string };
  tegs: string[];
  value: string;
}>();

let isVisible = ref(true);

let error = ref('');

const toggleVisibility: any = () => {
  isVisible.value = !isVisible.value;
  console.log('Button clicked! Visible');
};

const emit = defineEmits<{
  [x: string]: any;
  (e: 'chooseTeg', tegOne: string): void;
  (e: 'addTegFunction', tegs: string[]): void;
}>();

// const model = computed({
//   get() {
//     return props.value ?? '';
//   },
//   set(value) {
//     emit('chooseTeg', value);
//   },
// });

const chooseTeg = (tegOne: string) => {
  emit('chooseTeg', tegOne);
  isVisible.value = true;
};

const addTegFunction = () => {
  console.log('jjjj');
  emit('addTegFunction', props.tegs);
};
</script>

<style>
.Error {
  align-items: center;
  color: red;
}

/* .dropdown {
  cursor: pointer;
  display: flex;
} */
</style>

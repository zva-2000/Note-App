<template>
  <div class="dropdown">
    <p class="Error">{{ error }}</p>
    <InputForDropdown
      name="inputTeg"
      v-model:value="note.teg"
      @click="toggleVisibility"
      placeholder="Выберите группу"
    />
    <ul v-if="!isVisible">
      <li
        v-for="(tegOne, index) in tegs"
        :key="index"
        @click="chooseTeg(tegOne)"
      >
        {{ tegOne }}
      </li>
      <base-button @сlick="addTegFunction">
        <span>+</span>
      </base-button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import InputForDropdown from './InputForDropdown.vue';

import BaseButton from './BaseButton.vue';

const props = defineProps<{
  note: { teg: string };
  tegs: string[];
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
  (e: 'addTegFunction', tegNote: string): void;
}>();

const chooseTeg = (tegOne: string) => {
  emit.note.teg = tegOne;
  isVisible.value = true;
};

const addTegFunction: any = () => {
  // const tegLowerCase = props.tegs.toLowerCase();
  if (props.tegs.includes(props.note.teg)) {
    error.value = 'Такой тег уже есть';
    return false;
  } else {
    props.tegs.push(props.note.teg);
    error.value = '';
  }
};


</script>

<style>
.Error {
  align-items: center;
  color: red;
}

.dropdown {
  cursor: pointer
}

</style>

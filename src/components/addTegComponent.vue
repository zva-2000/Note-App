<template>
  <div class="dropdown">
    <p class="Error">{{ error }}</p>
    <InputForDropdow
      name="inputTeg"
      v-model:value="note.teg"
      @click="Visibility"
      placeholder="Выберите группу"
    />
    <ul v-if="!isVisible" style="cursor: pointer">
      <li
        v-for="(tegOne, index) in tegs"
        :key="index"
        @click="chooseTeg(tegOne)"
      >
        {{ tegOne }}
      </li>
      <base-button @onClick="addTegFunction">
        <span>+</span>
      </base-button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import InputForDropdow from './InputForDropdow.vue';

import baseButton from './BaseButton.vue';

const props = defineProps<{
  note: { teg: string };
  tegs: string[];
}>();

let isVisible = ref(true);

let error = ref('');

const Visibility: any = () => {
  isVisible.value = !isVisible.value;
  console.log('Button clicked!');
};

const chooseTeg = (tegOne: string) => {
  props.note.teg = tegOne;
  isVisible.value = true;
};

const addTegFunction = () => {
  // const tegLowerCase = props.note.teg.toLowerCase();
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
</style>

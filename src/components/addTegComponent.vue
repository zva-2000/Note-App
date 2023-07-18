<template>
  <div class="dropdown">
    <InputForDropdown
      class="input-teg"
      v-model:value="note.teg"
      @click="toggleVisibility"
      placeholder="Выберите группу"
      type="text"
    /> 
    <BaseButtonForSVG @click="addTegFunction" class="plusButton">
      <SvgForButtons :name="'svg-plus'"></SvgForButtons>
    </BaseButtonForSVG>

    <BaseList
      :items="filteredTegs"
      :is-visible="isVisible"
      @choose-item="chooseTeg"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

import InputForDropdown from './InputForDropdown.vue';

import BaseList from './BaseList.vue';

const props = defineProps<{
  note: { teg: string };
  tegs: string[];
}>();

let isVisible = ref(true);

// let inputFiltr = ref('');

const toggleVisibility: any = () => {
  isVisible.value = !isVisible.value;
  console.log('Button clicked! Visible');
};

const emit = defineEmits<{
  [x: string]: any;
  (e: 'chooseTeg', tegOne: string): void;
  (e: 'addTegFunction', tegs: string[]): void;
  (e: 'update:error', errorMessage: string): void;
}>();

const chooseTeg = (tegOne: string) => {
  emit('chooseTeg', tegOne);
  isVisible.value = true;
};

const addTegFunction = () => {
  const tegsLowerCase = props.tegs.map((tegOne) => tegOne.toLowerCase());
  const inputLowerCase = props.note.teg.toLowerCase();
  if (tegsLowerCase.includes(inputLowerCase)) {
    emit('update:error', 'Такой тег уже есть');
    return false;
  } else {
    emit('addTegFunction', props.tegs);
  }
};

const filteredTegs = computed(() => {
  const NoteLowerCase = props.note.teg.toLowerCase();
  return props.tegs.filter((teg) => teg.toLowerCase().includes(NoteLowerCase));
});
</script>

<style>
.dropdown {
  cursor: pointer;
  display: flex;
}
.input-teg {
  width: 350px;
}

.plusButton {
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  margin-top: 19px;
}
</style>

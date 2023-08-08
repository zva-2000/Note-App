<template>
  <div class="dropdown">
    <InputForDropdown
      class="input-teg"
      v-model:value="newTag"
      @click="toggleVisibility"
      placeholder="Выберите группу"
      type="text"
    />

    <BaseButtonForSVG @click="addTegFunction" class="plusButton">
      <SvgForButtons :name="'svg-plus'"></SvgForButtons>
    </BaseButtonForSVG>

    <SelectedTegs 
    class="tags"
    :items="selectedTegs"/>

    <BaseList
      :items="filteredTegs"
      :is-visible="isVisible"
      @choose-item="chooseTeg"
    />
  </div>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useTags } from '../composables/useTags.js'

import { useNotes } from '../composables/useNotes.js'

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

import InputForDropdown from './InputForDropdown.vue';

import BaseList from './BaseList.vue';

import SelectedTegs from './SelectedTegs.vue';

import BaseButton from './BaseButton.vue';

const { addTegFunctionForCompose, newTag, tags, choosenTegs } = useTags();

const { note } = useNotes();

const props = defineProps<{
  selectedTegs: string[];
  className: string;
}>();

let isVisible = ref(true);

const toggleVisibility: any = () => {
  isVisible.value = !isVisible.value;
  console.log('Button clicked! Visible');
};

const emit = defineEmits<{
  [x: string]: any;
  (e: 'chooseTeg', tegOne: string): void;
  (e: 'update:error', errorMessage: string): void;
  (e: 'update:inputTeg', inputTeg: string): void;
}>();

const chooseTeg = (tegOne: string) => {
  emit('chooseTeg', tegOne);
  isVisible.value = true;
  console.log(typeof tegOne);
};

const addTegFunction = () => {
  const tegsLowerCase = tags.value.map((tag: string) => tag.toLowerCase());
  const inputLowerCase = newTag.value.toLowerCase();
  if (tegsLowerCase.includes(inputLowerCase)) {
    emit('update:error', 'Такой тег уже есть');
    return false;
  } else {
    addTegFunctionForCompose();
  }
};

const filteredTegs = computed(() => {
  if (newTag.value === '') {
    return tags.value;
  } else {
    const inputLowerCase = newTag.value.toLowerCase();
    return tags.value.filter((tag: string) =>
      tag.toLowerCase().includes(inputLowerCase)
    );
  }
});

</script>

<style>
.input-teg {
  width: 40%;
}

.plusButton {
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  margin-top: 9px;
}

.tags {
  margin-top: 10px;
}

</style>

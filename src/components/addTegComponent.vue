<template>
  <div class="dropdown">

    <InputForDropdown
      class="input-teg"
      v-model:value="newTag"
      @click="toggleVisibility"
      placeholder=""
      type="text"
    />

    <BaseButtonForSVG @click="addTegFunction" class="plusButton">
      <SvgForButtons :name="'svg-plus'"></SvgForButtons>
    </BaseButtonForSVG>

    <BaseList
      v-click-outside="toggleVisibility"
      :items="filteredTegs"
      :is-visible="isVisible"
      @choose-item="chooseTeg"
    />

    <SelectedTegs
      class="select-tags"
      :items="selectedTegs"
      :show-button="true"
      @delete-tag="deleteTag"
      :selectedTeg="''"
      :importance="''"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useTags } from '../composables/useTags.js';

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

import InputForDropdown from './InputForDropdown.vue';

import BaseList from './BaseList.vue';

import SelectedTegs from './SelectedTegs.vue';

const { addTegFunctionForCompose, newTag, tags } = useTags();

const props = defineProps<{
  selectedTegs: string[];
}>();

let isVisible = ref(true);

const toggleVisibility: any = () => {
  isVisible.value = !isVisible.value;
};

const emit = defineEmits<{
  [x: string]: any;
  (e: 'chooseTeg', tegOne: string): void;
  (e: 'update:error', errorMessage: string): void;
  (e: 'update:inputTeg', inputTeg: string): void;
  (e: 'deleteTag', index: number): void;
}>();

const chooseTeg = (tegOne: string) => {
  emit('chooseTeg', tegOne);
  isVisible.value = true;
  console.log(typeof tegOne);
};

const deleteTag = (index: number) => {
  emit('deleteTag', index);
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

.select-tags {
  display: flex;
  flex-direction: initial;
  float: left;
  gap: 4px;
  position: relative;
  top: 10px;
}
</style>

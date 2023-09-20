<template>
  <div class="teg-dropdown">
    <!-- <InputForDropdown
      class="input-teg"
      v-model:value="newTag"
      @click="toggleVisibility"
      placeholder=""
      type="text"
    /> -->

    <BaseInput 
      class="input-for-add-teg"
      v-model:value="newTag"
      @click="toggleVisibility"
      type="text"
      label="Теги:"></BaseInput>

    <BaseButtonForSVG @click="addTegFunction" class="plusButton">
      <SvgForButtons :name="'svg-plus'"></SvgForButtons>
    </BaseButtonForSVG>

    <BaseList
      v-click-outside="toggleVisibility"
      :items="filteredTegs"
      @choose-item="chooseTeg"
      v-if="!isVisible"
    />
  </div>

  <SelectedTegs
    class="select-tags"
    :items="selectedTegs"
    :show-button="true"
    @delete-tag="deleteTag"
    :selectedTeg="''"
    :importance="''"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useTags } from '../composables/useTags.js';

import BaseInput from './BaseInput.vue';

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

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
  console.log(111, tegOne);
};

const deleteTag = (index: number) => {
  emit('deleteTag', index);
  console.log(111, index);
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
  gap: 4px;
}

.teg-dropdown {
  position: relative;
  margin-bottom: 10px;
  display: flex;
}

.input-for-add-teg{
  display: flex;
  position: relative;
  display: inline-block;
}
</style>

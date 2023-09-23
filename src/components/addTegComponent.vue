<template>
  <div class="teg-dropdown">
    <BaseInput
      class="input-for-add-teg"
      v-model:value="newTag"
      @click="toggleVisibility"
      type="text"
      label="Теги:"
      :error="sameTagError"
    ></BaseInput>

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

  <ul class="select-tags">
    <DeletableTag
      v-for="teg in selectedTegs"
      @delete-tag="deleteTag"
      :tagsText="teg"
      :tagsStyle="TagStyledMode.Tag"
    />
  </ul>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useTags } from '../composables/useTags.js';

import { TagStyledMode } from '@/types.ts';

import DeletableTag from './DeletableTag.vue';

import BaseInput from './BaseInput.vue';

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

import BaseList from './BaseList.vue';

const { addTegFunctionForCompose, newTag, tags } = useTags();

const props = defineProps<{
  selectedTegs: string[];
}>();

let isVisible = ref(true);

let sameTagError = ref('');

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
  let tagExists = false;
  tags.value.forEach((tag) => {
    if (tag.toLowerCase() === newTag.value.toLowerCase()) {
      tagExists = true;
    }
  });
  if (tagExists) {
    sameTagError.value = 'Такой тег уже есть';
    console.log(sameTagError.value);

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
  margin-top: 24px;
}

.select-tags {
  display: flex;
  gap: 5px;
}

.teg-dropdown {
  position: relative;
  margin-bottom: 10px;
  display: flex;
  /* padding-right: 38px; */
  align-items: center;
}

.input-for-add-teg {
  /* display: flex; */
  position: relative;
  /* display: inline-block; */
  flex-grow: 1;
}
</style>

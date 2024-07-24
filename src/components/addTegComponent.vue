<template>
  <div class="teg-dropdown">
      <BaseInput
        class="input-for-add-teg"
        v-model:value="model"
        @click="toggleVisibility"
        type="text"
        label="Теги:"
        :error="sameTagError"
        :anotherError="emptyTagError"
      ></BaseInput>

    <BaseButtonForSVG @click="add" class="plus-button">
        <SvgForButtons :name="'svg-plus'"></SvgForButtons>
      </BaseButtonForSVG>

    <BaseList
      v-click-outside="toggleVisibility"
      :items="filteredTegs(props.valueTag)"
      @choose-item="chooseTeg"
      v-if="!isVisible"
    />
  </div>

  <ul class="select-tags">
    <DeletableTag
      v-for="(teg, index) in selectedTegs"
      @delete-tag="deleteTag(index)"
      :tagsText="teg"
      :tagsStyle="TagStyledMode.base"
    />
  </ul>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { useTags } from '../composables/useTags.js';

import { TagStyledMode } from '@/types.ts';

import DeletableTag from './DeletableTag.vue';

import BaseInput from './BaseInput.vue';

import BaseButtonForSVG from './BaseButtonForSVG.vue';

import SvgForButtons from './SvgForButtons.vue';

import BaseList from './BaseList.vue';

const {  addTegFunction, filteredTegs, sameTagError, emptyTagError} = useTags();

const newTag = ref('');

const props = defineProps<{
  selectedTegs: string[];
  valueTag: string;
}>();

let isVisible = ref(true);

const toggleVisibility: any = () => {
  isVisible.value = !isVisible.value;
};

const add = () => {
  addTegFunction(props.valueTag);
  emit('clearValueTag');
}

const emit = defineEmits<{
  [x: string]: any;
  (e: 'chooseTeg', tegOne: string): void;
  (e: 'deleteTag', index: number): void;
  (e: 'update:modelValue', tag: string): void;
  (e: 'addTeg', tegOne: string): void;
  (e: 'filteredTeg', tegOne: string): void;
  (e: 'clearValueTag'): void;
}>();

const model = computed({
  get() {
    return props.valueTag ?? '';
  },
  set(tag: string) {
    emit('update:modelValue', tag);
  },
});

const chooseTeg = (tegOne: string) => {
  emit('chooseTeg', tegOne);
  isVisible.value = true;
};

const deleteTag = (index: number) => {
  emit('deleteTag', index);
};

</script>

<style>

.plus-button {
  width: 35px;
  height: 35px;
  background: transparent;
  border: none;
  margin-top: 43px;
  cursor: pointer;
}

.select-tags {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.teg-dropdown {
  position: relative;
  margin-bottom: 10px;
  display: flex;
}

.input-for-add-teg {
  position: relative;
  flex-grow: 1;
}
</style>

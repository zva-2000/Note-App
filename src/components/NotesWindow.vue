<template>
  <div class="all-notes">
    <div class="notes-window-header">
      <SearchInput v-model:value="search" />

      <base-button @click="openModal" class="open-modal-btn">
        <span>Добавить</span>
      </base-button>

      <ModalWindow
        v-if="!visibleModal"
        @close-modal="closeModal"
        :empty-title-error="emptyTitleError"
        @add-note="addNoteMainFunc"
        :choose-importance-tags="chooseImportanceTags"
        @chooseImportance="chooseImportanceTags"
      />
    </div>

    <base-button
      class="take-of-filter"
      @click="takeOffFilter"
      v-show="
        selectedTeg || importance || filterDateOne || filterDateTwo || search
      "
      >Сбросить фильтры</base-button
    >

    <p class="take-of-filter">Дата создания:</p>

    <div class="inputs-window-main-content">
      <BaseInput
        placeholder=""
        v-model:value="filterDateOne"
        type="date"
        :isReadonly="false"
        class="date-main-input"
      />

      До:

      <BaseInput
        placeholder=""
        v-model:value="filterDateTwo"
        type="date"
        :isReadonly="false"
        class="date-main-input"
      />

      <MovedButtons class="position-moved-buttons" />
    </div>

    <div class="notes-window-main-content">
      <BaseTag
        v-if="visibleTags"
        v-for="teg in tagsForMainWindow"
        :tagsText="teg"
        :tagsStyle="TagStyledMode.base"
        class="tags-in-main-wndw"
        @choose-tag="setTag"
        :active="selectedTeg === teg"
        :hover="true"
      ></BaseTag>

      <DeletableTag
        v-if="!visibleTags"
        v-for="(teg, index) in tagsForMainWindow"
        :tagsText="teg"
        :tagsStyle="TagStyledMode.base"
        class="tags-in-main-wndw"
        :active="selectedTeg === teg"
        :hover="true"
        @deleteTag="deleteTag(index)"
      />

      <BaseTag
        v-for="teg in chooseImportanceTags"
        :tagsText="teg"
        :tagsStyle="{
          [TagStyledMode.danger]: teg === 'Очень важно',
          [TagStyledMode.success]: teg === 'Не важно',
          [TagStyledMode.warning]: teg === 'Важно',
        }"
        class="tags-in-main-wndw"
        @choose-tag="setImpr"
        :active="importance === teg"
        :hover="true"
      ></BaseTag>

      <ChangeNoteButton @click="swowTags" v-if="visibleTags"></ChangeNoteButton>
      <SaveButton @click="hideTags" v-if="!visibleTags"></SaveButton>
    </div>

    <AllNotes v-if="!isEmptySearchResult" />
    <p v-else="isEmptySearchResult" class="nothing-find">
      Результатов не найдено
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ModalWindow from './ModalWindow.vue';

import MovedButtons from './MovedButtons.vue';

import SearchInput from './SearchInput.vue';

import BaseButton from './BaseButton.vue';

import AllNotes from './AllNotes.vue';

import BaseInput from './BaseInput.vue';

import BaseTag from './BaseTag.vue';

import DeletableTag from './DeletableTag.vue';

import ChangeNoteButton from './buttons/ChangeNoteButton.vue';

import SaveButton from './buttons/SaveButton.vue';

import { useTags } from '../composables/useTags';

import { useFilter } from '../composables/useFilter';

import { useNotes } from '../composables/useNotes';

import { TagStyledMode } from '@/types.ts';

const { tagsForMainWindow, chooseImportanceTags } = useTags();

const { emptyTitleError, addNote, isEmptySearchResult } = useNotes();

const {
  selectedTeg,
  importance,
  setTag,
  search,
  setImpr,
  takeOffFilter,
  filterDateOne,
  filterDateTwo,
} = useFilter();

const visibleModal = ref(true);

const visibleTags = ref(true);

const swowTags = () => {
  visibleTags.value = false;
};

const hideTags = () => {
  visibleTags.value = true;
  emptyTitleError.value = '';
};

const openModal = () => {
  visibleModal.value = false;
};

const closeModal = () => {
  visibleModal.value = true;
  emptyTitleError.value = '';
};

const addNoteMainFunc = (newNote: any) => {
  addNote(newNote);
  if (emptyTitleError.value !== 'Введите заголовок') {
    closeModal();
  }
};

const deleteTag = (index: any) => {
  tagsForMainWindow.value.splice(index, 1);
};
</script>

<style>
.date-main-input {
  width: 406px;
}
.main-title {
  text-align: center;
  font-weight: 600;
  font-size: xx-large;
  margin-bottom: 30px;
}

.notes-window-header {
  display: flex;
  gap: 15px;
  margin: auto;
  box-sizing: border-box;
  padding: 10px 0px 11px 0px;
  align-items: center;
}

.notes-window-main-content {
  align-items: center;
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.inputs-window-main-content {
  align-items: center;
  display: flex;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0px 0px 13px 0px;
  gap: 15px;
}

.tags-in-main-wndw {
  cursor: pointer;
  display: flex;
  gap: 5px;
  font-size: 20px;
  text-align: center;
}

.all-notes {
  margin: auto;
  width: 1000px;
}

.position-moved-buttons {
  float: left;
}

.take-of-filter {
  gap: 3rem;
  justify-content: center;
  margin: auto;
  align-items: flex-end;
  cursor: pointer;
  margin-bottom: 10px;
  display: flow;
}

.nothing-find {
  display: flex;
  justify-content: center;
  margin-top: 152px;
  font-size: 34px;
  color: #9ba3ac;
}
</style>

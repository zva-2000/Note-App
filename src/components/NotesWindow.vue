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
        @update:error="emptyTagError = $event"
        :empty-tag-error="emptyTagError"
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
        v-for="teg in tagsForMainWindow"
        :tagsText="teg"
        :tagsStyle="TagStyledMode.Tag"
        class="tags-in-main-wndw"
        @choose-tag="setTag"
      ></BaseTag>

      <BaseTag
        v-for="teg in chooseImportanceTags"
        :tagsText="teg"
        :tagsStyle="TagStyledMode.Importance"
        class="tags-in-main-wndw"
        @choose-tag="setImpr"
      ></BaseTag>
    </div>

    <AllNotes />
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

import { useTags } from '../composables/useTags';

import { useFilter } from '../composables/useFilter';

import { useNotes } from '../composables/useNotes';

const { emptyTagError, tagsForMainWindow, chooseImportanceTags } = useTags();

const { emptyTitleError, addNote } = useNotes();

import { TagStyledMode } from '@/types.ts';

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

let visibleModal = ref(true);

const openModal = () => {
  visibleModal.value = false;
};

const closeModal = () => {
  visibleModal.value = true;
};

const addNoteMainFunc = (newNote: any) => {
  addNote(newNote);
  if (emptyTitleError.value !== 'Введите заголовок') {
    closeModal();
  }
};
</script>

<style>
.date-main-input {
  width: 20.5rem;
}
.main-title {
  text-align: center;
  font-weight: 600;
  font-size: xx-large;
  margin-bottom: 30px;
}

.notes-window-header {
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 80px;
  margin: auto;
}

.open-modal-btn {
  margin-top: 17px;
}

.notes-window-main-content {
  align-items: flex-end;
  display: flex;
}

.inputs-window-main-content {
  align-items: flex-end;
  display: flex;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0px 0px 13px 0px;
  gap: 15px;
}

.tags-in-main-wndw {
  cursor: pointer;
  display: flex;
  /* flex-direction: column; */
  gap: 5px;
  font-size: 20px;
  text-align: center;
  margin-left: 5px;
  max-width: 35rem;
  /* width: 21.6rem; */
  float: left;
}

.tags-in-main-wndw:focus {
  background-color: aquamarine;
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
  margin-top: 10px;
  margin-bottom: 10px;
  display: flow;
}

/* .search {
  margin-top: 15px;
} */
</style>

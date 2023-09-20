<template>
  <div class="notes-window-header all-notes">
    <SearchInput v-model:value="search" />

    <base-button @click="openModal" class="open-modal-btn">
      <span>Добавить</span>
    </base-button>

    <ModalWindow
      v-if="!visibleModal"
      @close-modal="closeModal"
      @update:error="emptyTagError = $event"
      @update:impr="updateImpr"
      :empty-tag-error="emptyTagError"
      :empty-title-error="emptyTitleError"
      :note="note"
      @add-note="addNoteMainFunc"
      @choose-teg-two="chooseTeg"
      :choose-importance-tags="chooseImportanceTags"
      @chooseImportance="chooseImportanceTags"
      @delete-tag="deleteTag"
    />
  </div>

  <base-button
    class="take-of-filter all-notes"
    @click="takeOffFilter"
    v-show="
      selectedTeg || importance || filterDateOne || filterDateTwo || search
    "
    >Сбросить фильтры</base-button
  >

  <p class="take-of-filter all-notes">Дата создания:</p>

  <div class="inputs-window-main-content all-notes">
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

  <div class="notes-window-main-content all-notes">
    <SelectedTegs
      :items="tagsForMainWindow"
      @choose-tag="setTag"
      :showButton="false"
      class="tags-in-main-wndw"
      :selectedTeg="selectedTeg"
      :importance="importance"
    />

    <SelectedTegs
      :items="chooseImportanceTags"
      @choose-tag="setImpr"
      :showButton="false"
      class="tags-in-main-wndw"
      :selectedTeg="selectedTeg"
      :importance="importance"
    />
  </div>

  <AllNotes class="all-notes" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ModalWindow from './ModalWindow.vue';

import MovedButtons from './MovedButtons.vue';

import SearchInput from './SearchInput.vue';

import BaseButton from './BaseButton.vue';

import SelectedTegs from './SelectedTegs.vue';

import AllNotes from './AllNotes.vue';

import BaseInput from './BaseInput.vue';

import { useTags } from '../composables/useTags';

import { useFilter } from '../composables/useFilter';

import { useNotes } from '../composables/useNotes';

const { chooseTeg, emptyTagError, tagsForMainWindow, chooseImportanceTags } =
  useTags();

const { note, emptyTitleError, addNote } = useNotes();

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

const addNoteMainFunc = () => {
  addNote();
  closeModal();
};

const deleteTag = (index: any) => {
  note.value.teg.splice(index, 1);
};

const updateImpr = (value: string) => {
  note.value.impr = value;
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

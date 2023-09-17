<template>
  <!-- <h1 class="title main-title">Мои заметки</h1> -->

  <div class="notes-window-header">
    <SearchInput v-model:value="search" />

    <base-button @click="openModal" class="open-modal-btn">
        <span>Добавить</span>
    </base-button>

    <ModalWindow v-if="!visibleModal" 
    @close-modal="closeModal" 
    @update:error="emptyTagError = $event" 
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

  <a class="take-of-filter" @click="takeOffFilter">Сбросить фильтры</a>

  <div class="notes-window-main-content">
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

  <AllNotes class="all-notes"/>
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

const { chooseTeg, emptyTagError, tagsForMainWindow, chooseImportanceTags } = useTags();

const { note, emptyTitleError, addNote } =
  useNotes();  

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
}

const deleteTag = (index: any) => {
  note.value.teg.splice(index, 1);
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
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: auto;
  align-items: flex-end;
}

.inputs-window-main-content {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: auto;
  align-items: flex-end;
}

.tags-in-main-wndw {
  cursor: pointer;
    display: flex;
    /* flex-direction: column; */
    gap: 5px;
    font-size: 20px;
    text-align: center;
    /* margin-left: 10px; */
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
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: auto;
  align-items: flex-end;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* .search {
  margin-top: 15px;
} */
</style>

<template>

<h1 class="title main-title">Твои заметки</h1>  

<div class="notes-window-header">

  <MovedButtons class="position-moved-buttons"/>

  <SearchInput v-model:value="search"/>

  <ModalWindow/>

</div>

<div class="notes-window-main-content">

  <SelectedTegs class="tags" :items="tagsForMainWindow" @chooseTag="setTag" :showButton="false"/>

  <AllNotes class="all-notes"/>

</div>

</template>

<script setup lang="ts">

import ModalWindow from './ModalWindow.vue'

import MovedButtons from './MovedButtons.vue';

import SearchInput from './SearchInput.vue';

import { useTags } from '../composables/useTags.js';

import SelectedTegs from './SelectedTegs.vue';

import AllNotes from './AllNotes.vue';

import { useNotes } from '../composables/useNotes.js';

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, setTag, SelectedTeg, search } = useFilter();

const { tagsForMainWindow } = useTags();

const { notes, visibleModal } = useNotes();


</script>

<style>

.main-title {
  text-align: center;
  font-weight: 600;
  font-size: xx-large;
  margin-bottom: 30px;
}

.notes-window-header {
  display: flex;
  justify-content: center;
  gap: 150px;
  height: 80px;
  margin: auto;
}

.notes-window-main-content {
  /* display: flex; */
}

.tags {
  display: flex;
  flex-direction: column;
  margin-left: 6.5rem;
  zoom: 115%;
  z-index: -1;
}

.all-notes {
  margin: auto;
  width: 1000px;
}

.position-moved-buttons {
  margin-top: 25px;
}

/* .search {
  margin-top: 15px;
} */
</style>

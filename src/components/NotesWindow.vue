<template>

<div class="notes-window-header">

  <MovedButtons />

  <SearchInput v-model:value="search" />

  <ModalWindow/>

</div>

<div class="notes-window-main-content">

  <SelectedTegs class="tags" :items="tagsForMainWindow" @chooseTag="setTag" />

  <AllNotes class="all-notes"/>

</div>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import BaseButton from './BaseButton.vue';

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

.notes-window-header {
  display: flex;
}

.notes-window-main-content {
  display: flex;
}

.tags {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}

.all-notes {
  margin-left: 8rem;
}
</style>

<template>
  <MovedButtons />

  <SelectedTegs class="tags" :items="tags" @chooseTag="filteredNotes"/>

  <AllNotes />
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';

import MovedButtons from './MovedButtons.vue';

import { useTags } from '../composables/useTags.js'

import SelectedTegs from './SelectedTegs.vue';

import AllNotes from './AllNotes.vue';

import { useNotes } from '../composables/useNotes.js'

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter } = useFilter();

const { tags } = useTags();

const { notes } = useNotes()





</script>

<style></style>

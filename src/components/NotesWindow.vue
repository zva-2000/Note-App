<template>
  <MovedButtons />

  <SelectedTegs class="tags" :items="tags" @chooseTag="setTag" />

  <AllNotes />

  <p v-for="tag in tags" :key="tag.id">
    <a @click="selectedTag === tag">{{ tag.tag }}</a>
  </p>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import MovedButtons from './MovedButtons.vue';

import { useTags } from '../composables/useTags.js';

import SelectedTegs from './SelectedTegs.vue';

import AllNotes from './AllNotes.vue';

import { useNotes } from '../composables/useNotes.js';

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, setTag, SelectedTeg } = useFilter();

const { tags } = useTags();

const { notes } = useNotes();

</script>

<style></style>

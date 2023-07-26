<template>
  <MovedButtons />

  <SelectedTegs class="tags" :items="tags" @chooseTag="notesFilterByTag"/>

  <AllNotes />

  <p v-for="tag in tags" :key="tag.id">
  <a @click="selectedTag = tag.tag">{{ tag.tag }}</a>
  
  </p>
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

console.log(tags[1])

// console.log(TestTags.value)

let selectedTag = ref(''); 

const notesFilterByTag = computed(() => {
  return notes.value.filter((note) =>
    note.teg.find((item) => item === selectedTag.value)
  );
});

console.log(selectedTag.value)

</script>

<style></style>

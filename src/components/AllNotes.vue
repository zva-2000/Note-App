<template>
  <div class="notes">
    <NoteWithInputs
      v-for="(note, index) in notesFilterByTag"
      :key="index"
      :note="note"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import NoteWithInputs from './NoteWithInputs.vue';

import { useTags } from '../composables/useTags.js';

import { useNotes } from '../composables/useNotes.js';

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, viewMode, notesFilterByTag } = useFilter();

const {
  notes,
  removeNote,
  visibleModal,
  openModal,
  closeModal,
  note
} = useNotes();

const { tags } = useTags();
</script>

<style lang="scss">

.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 13px 0;
}

.delete-button {
  margin-right: 12px;
  color: #999999;
  &:last-child {
    margin-right: 0;
  }
}

.note-teg {
  margin-top: 0px;
}


</style>

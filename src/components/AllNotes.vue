<template>
  <div class="notes" :class="viewMode">
    <NoteWithInputs
      :emptyTitleError="emptyTitleErrorInUpdatindNote"
      v-for="(note, index) in filteredNotesList"
      :key="index"
      :note="note"
      :index="index"
      @editNote="updateNote"
      @addTagToNote="updateNoteTeg"
      @delete-tag-double="deleteTag"
      :choose-importance-tags="chooseImportanceTags"
      @removeNote="removeNote"
    />
  </div>
</template>

<script setup lang="ts">
import NoteWithInputs from './NoteWithInputs.vue';

import { useTags } from '../composables/useTags.js';

import { useNotes } from '../composables/useNotes';

const {
  updateNoteTeg,
  updateNote,
  deleteTag,
  filteredNotesList,
  removeNote,
  emptyTitleErrorInUpdatindNote,
  note,
} = useNotes();

const { chooseImportanceTags } = useTags();

import { useFilter } from '../composables/useFilter';

const { viewMode } = useFilter();
</script>

<style lang="scss">
.notes {
  display: grid;
  padding: 13px 0;
  gap: 15px;
}

.note-teg {
  margin-top: 0px;
}
</style>

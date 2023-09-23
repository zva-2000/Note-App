<template>
  <div class="notes" :class="viewMode">
    <NoteWithInputs
      v-for="(note, index) in filteredNotesList"
      :key="index"
      :note="note"
      :index="index"
      @editNote="updateNote"
      :empty-tag-error="emptyTagError"
      @update:error="emptyTagError = $event"
      @addTagToNote="updateNoteTeg"
      @delete-tag-double="deleteTag"
      :choose-importance-tags="chooseImportanceTags"
      @removeNote="removeNote"
      :importanceStyle="TagStyledMode.Importance"
      :tags-style="TagStyledMode.Tag"
    />
  </div>
</template>

<script setup lang="ts">
import NoteWithInputs from './NoteWithInputs.vue';

import { useTags } from '../composables/useTags.js';

import { useNotes } from '../composables/useNotes';

const { updateNoteTeg, updateNote, deleteTag, filteredNotesList, removeNote } =
  useNotes();

const { emptyTagError, chooseImportanceTags } = useTags();

import { useFilter } from '../composables/useFilter';

const { viewMode } = useFilter();

import { TagStyledMode } from '@/types.ts';
</script>

<style lang="scss">
.notes {
  display: grid;
  padding: 13px 0;
}

.Grid {
  align-items: center;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 25px;
}

.List {
  padding: 15px 0;
  grid-template-columns: repeat(1, 1fr);
}

.note-teg {
  margin-top: 0px;
}
</style>

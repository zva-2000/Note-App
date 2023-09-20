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
      @update:impr="chooseImportanceMain"
      :choose-importance-tags="chooseImportanceTags"
      @removeNote="removeNote"
    />
  </div>
</template>

<script setup lang="ts">
import NoteWithInputs from './NoteWithInputs.vue';

import { useTags } from '../composables/useTags.js';

import { useNotes } from '../composables/useNotes';

const { notes, note, filteredNotesList, removeNote } = useNotes();

const { emptyTagError, chooseImportanceTags } = useTags();

import { useFilter } from '../composables/useFilter';

const { viewMode } = useFilter();

function updateNoteTeg(noteId: number, updatedNoteTeg: string) {
  notes.value.map((note) => {
    if (note.id !== noteId) return note.teg;
    else if (!note.teg.includes(updatedNoteTeg)) {
      note.teg.push(updatedNoteTeg);
    }
    console.log(444, updateNoteTeg, note.teg);
  });
}

function updateNote(updatedNote: any) {
  console.log(updatedNote);
  notes.value = notes.value.map((note) => {
    if (note.id !== updatedNote.id) return note;
    else return updatedNote;
  });
}

function deleteTag(noteId: number, index: number) {
  notes.value.map((note) => {
    if (note.id !== noteId) return note.teg;
    else note.teg.splice(index, 1);
    console.log(444, index);
  });
}

const chooseImportanceMain = (impr: string) => {
  note.value.impr = impr;
};
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

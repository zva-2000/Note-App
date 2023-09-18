<template>
  <div class="notes" :class="viewMode">
    <NoteWithInputs
      v-for="(note, index) in filteredNotesList"
      :key="index"
      :note="note"
      :index="index"
      :empty-tag-error="emptyTagError"
      @update:error="emptyTagError = $event"
      @addTagToNoteAgain="chooseTeginNote"
      @handleDeleteTag="deleteTagInChangeNote"
      @chooseImportanceAgain="chooseImportanceMain"
      :choose-importance-tags="chooseImportanceTags"
    />
  </div>
</template>

<script setup lang="ts">
import NoteWithInputs from './NoteWithInputs.vue';

import { useTags } from '../composables/useTags.js';

import { useNotes } from '../composables/useNotes';

const { note, filteredNotesList } = useNotes();

const chooseTeginNote = (newTag: string) => {
  // if (!note.value.teg) note.value.teg = [];
  note.value.teg.push(newTag);
  console.log(444, newTag, note.value.teg);
};

const deleteTagInChangeNote = (index: number) => {
  note.value.teg.splice(index, 1);
};

const chooseImportanceMain = (impr: string) => {
  note.value.impr = impr;
};

const { emptyTagError, chooseImportanceTags } = useTags();

import { useFilter } from '../composables/useFilter.ts';

const { viewMode } = useFilter();
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

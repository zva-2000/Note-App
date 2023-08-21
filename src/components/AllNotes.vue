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
  note,
  curIndex,
  changeNo1,
} = useNotes();

const { tags } = useTags();
</script>

<style lang="scss">
.note-unit {
  &.full {
    justify-content: center;
    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 13px 0;
}

.note-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 22px;
    color: #402caf;
  }
}
.note-header .List {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    justify-content: center;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
}

.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}

.note {
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}

.Grid {
  width: 48%;
}

.List {
  width: 100%;
  justify-content: center;
  text-align: center;
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

// .note-date {
//   margin: 10px 0;
// }
</style>

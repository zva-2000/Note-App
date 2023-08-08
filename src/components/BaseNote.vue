<template>

    <div class="note-header" :class="viewMode">
          <h1>{{ note.title }}</h1>
          <BaseDeleteButton class="delete-button" @click="removeNote(index)"/>
        </div>
        <div class="note-body">
          <p>{{ note.descr }}</p>
          <p>{{ note.impr }}</p>
          <p class="note-date">{{ note.date }}</p>
          <SelectedTegs class="note-teg" :items="note.teg"/>
        </div>

    
</template>

<script setup lang="ts">

const props = defineProps<{
    note: {title: string,
    descr: string,
    impr: string,
    date: string,
    teg: string[]};
}>();

import SelectedTegs from './SelectedTegs.vue';

import BaseDeleteButton from './BaseDeleteButton.vue';

import { useNotes } from '../composables/useNotes.js';

const { notes, removeNote } = useNotes();

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, viewMode, notesFilterByTag } = useFilter();
  
</script>

<style>

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


</style>
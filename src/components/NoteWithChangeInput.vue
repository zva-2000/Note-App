<template>
<div class="note">
  <div class="note-header" :class="viewMode">
        <h1>{{ note.title }}</h1>
        <!-- <input type="text" v-model="note.title"> -->
        <ChangeNoteButton @click="changeNo1"/>
        <BaseDeleteButton class="delete-button" @click="removeNote(index)"/>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <p>{{ note.impr }}</p>
        <p class="note-date">{{ note.date }}</p>
        <SelectedTegs class="note-teg" :items="note.teg" />
      </div>
  </div>  
</template>

<script setup lang="ts">

const props = defineProps<{
  note: {title: string,
  descr: string,
  impr: string,
  date: string,
  teg: string[]};
  index: number;
}>();


import BaseDeleteButton from './BaseDeleteButton.vue';

import ChangeNoteButton from './ChangeNoteButton.vue';

import { useNotes } from '../composables/useNotes.js';

import SelectedTegs from './SelectedTegs.vue';

const { notes, removeNote, visibleModal, openModal, closeModal, changeNo1 } = useNotes();

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, viewMode, notesFilterByTag } = useFilter();

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
  padding: 40px 0;
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

</style>
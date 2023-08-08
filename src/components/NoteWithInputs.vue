<template>
<div class="note">

  <div v-if="edit">

       <BaseNote :note="note"/> 
       
    </div>

  <div v-if="!edit">

    <InputsForNote :note="note"/>

  </div>  

  <ChangeNoteButton @click="editor" class="change-btn"/> 

</div> 

</template>

<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps<{
  note: {title: string,
  descr: string,
  impr: string,
  date: string,
  teg: string[]};
}>();

const edit = ref(true)

const editor = () => (edit.value = !edit.value)

import BaseNote from './BaseNote.vue'

import BaseDeleteButton from './BaseDeleteButton.vue';

import ChangeNoteButton from './ChangeNoteButton.vue';

import InputsForNote from './InputsForNote.vue';

import BaseInput from './BaseInput.vue';

import BaseTextarea from './BaseTextarea.vue';

import { useNotes } from '../composables/useNotes.js';

import SelectedTegs from './SelectedTegs.vue';

const { notes, removeNote } = useNotes();

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

.change-btn {
  margin-left: 300px;
}

</style>
<template>
  <div class="note" :class="viewMode">

    <div class="note-btns">
      
      <ChangeNoteButton @click="editor" class="change-btn" v-show="edit"/>

      <SaveButton @click="editor" class="change-btn" v-show="!edit"/>
      
      <BaseDeleteButton class="delete-button" @click="removeNote(index)"/>

    </div>  
    
      <BaseNote :note="note" :index="index" v-if="edit"/>

      <InputsForNote :note="note" v-if="!edit" :index="index" @editNote="editor"/>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  note: {
    title: string;
    descr: string;
    impr: string;
    date: string;
    beginDate: string;
    teg: string[];
  };
  index: number;
}>();

const edit = ref(true);

const editor = () => (edit.value = !edit.value);

import SaveButton from './buttons/SaveButton.vue';

import BaseNote from './BaseNote.vue';

import ChangeNoteButton from './buttons/ChangeNoteButton.vue';

import InputsForNote from './InputsForNote.vue';

import BaseDeleteButton from './BaseDeleteButton.vue';

import { useNotes } from '../composables/useNotes.js';

const { notes, removeNote } = useNotes();

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, viewMode, notesFilterByTag } = useFilter();

</script>

<style lang="scss">
.note {
  border-radius: 20px;
  width: 50%;
  padding: 0px 14px 34px 32px;
  margin-bottom: 20px;
  background-color: #ffffff;
  height: 100%;
  &.List {
    width: 100%;
    margin-bottom: 15px;
  }
}

.Grid {
  width: 48%;
}

.List {
  width: 100%;
}

.delete-button {
    color: #999999;
    float: right;
    position: relative;
}

.note-teg {
  margin-top: 0px;
}

.note-btns {
  display: flex;
  position: relative;
  top: 12px;
}

.change-btn {
  margin-left: auto;
}

// .display-none {
//   display: none;
// }
</style>

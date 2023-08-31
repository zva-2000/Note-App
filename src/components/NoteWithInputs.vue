<template>
  <div class="note" :class="viewMode">
    <BaseDeleteButton class="delete-button" @click="removeNote(index)" />
    
      <BaseNote :note="note" :index="index" v-if="edit"/>

      <InputsForNote :note="note" v-if="!edit" :index="index"/>

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

// const edit = ref(true);

// const editor = () => (edit.value = !edit.value);

import BaseNote from './BaseNote.vue';

import ChangeNoteButton from './buttons/ChangeNoteButton.vue';

import InputsForNote from './InputsForNote.vue';

import BaseDeleteButton from './BaseDeleteButton.vue';

import { useNotes } from '../composables/useNotes.js';

const { notes, removeNote } = useNotes();

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, viewMode, notesFilterByTag } = useFilter();

import { useVisible } from '../composables/useVisible.ts'

const { edit } = useVisible();

</script>

<style lang="scss">
.note {
  border-radius: 20px;
  width: 50%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  height: 100%;
  &.List {
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }
}

.Grid {
  width: 48%;
}

.List {
  width: 100%;
  justify-content: center;
  text-align: center;
  margin: auto;
}

.delete-button {
  margin-left: 42px;
    color: #999999;
    float: right;
    position: relative;
    left: 21px;
}

.note-teg {
  margin-top: 0px;
}

</style>

<template>
  <div class="note" :class="viewMode">
    <BaseDeleteButton class="delete-button" @click="removeNote(index)" />
    
      <BaseNote :note="note" :index="index" v-if="edit"/>

      <InputsForNote :note="note" v-if="!edit" :index="index"/>

    <ChangeNoteButton @click="editor" class="change-btn" />
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

import BaseNote from './BaseNote.vue';

import ChangeNoteButton from './ChangeNoteButton.vue';

import InputsForNote from './InputsForNote.vue';

import BaseDeleteButton from './BaseDeleteButton.vue';

import { useNotes } from '../composables/useNotes.js';

const { notes, removeNote } = useNotes();

import { useFilter } from '../composables/useFilter.ts';

const { notesFilter, viewMode, notesFilterByTag } = useFilter();
</script>

<style lang="scss">
.note {
  width: 48%;
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
  &.List {
    width: 100%;
    text-align: center;
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
  margin-left: 42px;
    color: #999999;
    float: right;
    position: relative;
    left: 21px;
}

.note-teg {
  margin-top: 0px;
}

.change-btn {
  margin-left: 93%;
}
</style>

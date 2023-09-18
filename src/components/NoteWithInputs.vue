<template>
  <div class="note">
    <div class="note-btns">
      <ChangeNoteButton @click="editor" class="change-btn" v-show="edit" />

      <SaveButton @click="editor" class="change-btn" v-show="!edit" />

      <BaseDeleteButton class="delete-button" @click="removeNote(index)" />
    </div>

    <BaseNote :note="note" :index="index" v-if="edit" />

    <InputsForNote
      :note="note"
      v-if="!edit"
      :index="index"
      @editNote="editor"
      :emptyTagError="emptyTagError"
      @update:error="emitSameTagErrorAgain"
      @addTagToNote="addTagToNoteAgain"
      @delete-tag="handleDeleteTag"
      @update:impr="chooseImportanceAgain"
      :chooseImportanceTags="chooseImportanceTags"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

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
  emptyTagError: string;
  chooseImportanceTags: string;
}>();

const edit = ref(true);

const editor = () => (edit.value = !edit.value);

import SaveButton from './buttons/SaveButton.vue';

import BaseNote from './BaseNote.vue';

import ChangeNoteButton from './buttons/ChangeNoteButton.vue';

import InputsForNote from './InputsForNote.vue';

import BaseDeleteButton from './BaseDeleteButton.vue';

import { useNotes } from '../composables/useNotes.js';

const { removeNote } = useNotes();

const emit = defineEmits<{
  [x: string]: any;
  (e: 'update:error', sameTagError: string): void;
  (e: 'addTagToNoteAgain', newTag: string): void;
  (e: 'delete-tag-double', index: number): void;
  (e: 'chooseImportanceAgain', impr: string): void;
}>();

const emitSameTagErrorAgain = (errorMessage: string) => {
  emit('update:error', errorMessage);
};

const addTagToNoteAgain = (newTag: string) => {
  emit('addTagToNoteAgain', newTag);
  console.log(333, newTag);
};

const handleDeleteTag = (index: number) => {
  emit('delete-tag-double', index);
};

const chooseImportanceAgain = computed({
  get() {
    return props.chooseImportanceTags ?? '';
  },
  set(impr: string) {
    emit('chooseImportanceAgain', impr);
  },
});
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
</style>

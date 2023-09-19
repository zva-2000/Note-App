<template>
  <div class="note">

    <BaseNote :note="note" :index="index" v-if="!edit" :edit="edit" @funcEdition="funcEdition" @removeNote="removeNote"/>

    <InputsForNote
      :note="note"
      :edit="edit"
      v-if="edit"
      :index="index"
      @editNote="editNote"
      :emptyTagError="emptyTagError"
      @update:error="emitSameTagErrorAgain"
      @addTagToNote="addTagToNote"
      @delete-tag="handleDeleteTag"
      @update:impr="(value) => $emit('update:impr', value)"
      :chooseImportanceTags="chooseImportanceTags"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  note: {
    id:number;
    title: string;
    descr: string;
    impr: string;
    date: number;
    beginDate: number;
    teg: string[];
  };
  index: number;
  emptyTagError: string;
  chooseImportanceTags: string[];
}>();

const edit = ref(false);

import BaseNote from './BaseNote.vue';

import InputsForNote from './InputsForNote.vue';

import { useNotes } from '../composables/useNotes.js';

const { removeNote } = useNotes();

const emit = defineEmits<{
  [x: string]: any;
  (e: 'update:error', sameTagError: string): void;
  (e: 'addTagToNote', id: number, teg: string): void;
  (e: 'delete-tag-double', index: number): void;
  (e: 'chooseImportanceAgain', impr: string): void;
  (e: 'editNote', editOne: string): void;
}>();

const emitSameTagErrorAgain = (errorMessage: string) => {
  emit('update:error', errorMessage);
};

const addTagToNote = (id: number, teg: string) => {
  emit('addTagToNote', id, teg);
  console.log(3333, teg);
};


const handleDeleteTag = (index: number) => {
  emit('delete-tag-double', index);
};

const funcEdition = () => (edit.value = !edit.value)

const editNote = (editOne: any) => {
  funcEdition();
  emit('editNote', editOne);
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
    padding: 25px 25px 34px 34px;
    background-color: #ffffff;
    margin-bottom: 15px;
}

.delete-button {
  color: #999999;
  float: right;
  position: relative;
}

.note-teg {
  margin-top: 0px;
}

.change-btn {
  margin-left: auto;
}
</style>
